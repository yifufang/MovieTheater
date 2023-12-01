from config import app

class user:
    def __init__(self, user_id):
        # open database connection, and fetch data from database
        cur = app.mysql.connection.cursor()
        cur.execute("SELECT * FROM users WHERE user_id = %s", (user_id,))
        user = cur.fetchone()
        cur.close()
        if user is None:
            raise Exception("User not found")
        
        ## dont change this
        self.user_id = user_id
        self.email = user[1]
        self.password = user[2]
        self.first_name = user[3]
        self.last_name = user[4]
        self.membership = user[5]
        self.reward_point = user[6]

        ##optional attribute
        self.tickets_bought = []

    # Frontend verifies if seats are valid through seat map, then asks backend to register.
    # Update "seat.is_occupied" and create a new "ticket" in db for each seat purchased.
    def Book_tickets(self, price, seat_ids, schedule_id):
        cur = app.mysql.connection.cursor()
        for seat in seat_ids:
            cur.execute("UPDATE seats SET is_occupied = 1 WHERE (theater_id = %s) and (seat_id = %s)", (seat[0], seat[1:]))
             # defaults: ticket_id (auto_inc, unique), cancelled=0, cancelled=False, timestamp=CURRENT_TIMESTAMP
            cur.execute("INSERT INTO tickets (price, theater_id, seat_id, user_id, schedule_id) VALUES\
                        (%s, %s, %s, %s, %s)", (price, seat[0], seat[1:], self.user_id, schedule_id))
            self.Update_reward_point(seat, True)
        app.mysql.connection.commit()
        cur.close()

    # Reverse actions of Book_tickets() except update the "ticket.cancelled' field instead of deleting entry
    def Cancel_tickets(self, seat_ids):
        cur = app.mysql.connection.cursor()
        for seat in seat_ids:
            cur.execute("UPDATE seats SET is_occupied = 0 WHERE (theater_id = %s) and (seat_id = %s)", (seat[0], seat[1:]))
            cur.execute("UPDATE tickets SET cancelled = 1 WHERE (theater_id = %s) and (seat_id = %s)", (seat[0], seat[1:]))
            self.Update_reward_point(seat, False)
        app.mysql.connection.commit()
        cur.close()

    # P is premium member, R is regular member
    def Buy_membership(self, isUpgrade):
        cur = app.mysql.connection.cursor()
        membership = 'P' if isUpgrade else 'R'
        cur.execute("UPDATE users SET membership = %s WHERE (user_id = %s)", (membership, self.user_id))
        app.mysql.connection.commit()
        cur.close()

    # P is premium member, R is regular member
    def Get_membership(self):
        cur = app.mysql.connection.cursor()
        cur.execute("SELECT * FROM users WHERE (user_id = %s)", (self.user_id,))
        user = cur.fetchone()
        cur.close()
        return user[5]
    
    # add one point per dollar spent if buying, subtract if cancelling
    def Update_reward_point(self, seat, isBuying):
        cur = app.mysql.connection.cursor()
        cur.execute("SELECT * FROM tickets WHERE (theater_id = %s) and (seat_id = %s)", (seat[0], seat[1:]))
        ticket = cur.fetchone()
        price = int(ticket[1]) if isBuying else -int(ticket[1])
        cur.execute("UPDATE users SET reward_point = reward_point + %s WHERE (user_id = %s)", (price, self.user_id))
        app.mysql.connection.commit()
        cur.close()
        
    # Return list of movies watched in past 30 days
    def Get_watch_history(self):
        cur = app.mysql.connection.cursor()
        cur.execute("SELECT * FROM tickets WHERE (user_id = %s) and (DATE(timestamp) >= (DATE(NOW()) - INTERVAL 30 DAY))", (self.user_id,))
        tickets = cur.fetchall()
        watchedMovies = []
        for ticket in tickets: 
            schedule_id = ticket[6]
            cur.execute("SELECT * FROM film_schedules WHERE (schedule_id = %s)", (schedule_id,)) # get schedule_id from ticket
            film_schedule = cur.fetchone()
            cur.execute("SELECT * FROM movies WHERE (film_id = %s)", (film_schedule[2],)) # get film_id from film_schedule
            movie = cur.fetchone()
            watchedMovies.append(movie[1]) # get title from movies
        cur.close()
        return watchedMovies

    def Get_purchase_history(self):
        cur = app.mysql.connection.cursor()
        cur.execute("SELECT * FROM tickets WHERE (user_id = %s)", (self.user_id,))
        tickets = cur.fetchall()
        cur.close()
        return tickets