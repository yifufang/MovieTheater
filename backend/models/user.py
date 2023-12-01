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

        # dont change this
        self.user_id = user_id
        self.email = user[1]
        self.password = user[2]
        self.first_name = user[3]
        self.last_name = user[4]
        self.membership = user[5]
        self.reward_point = user[6]

        # optional attribute
        self.tickets_bought = []

    # Reverse actions of Book_tickets() except update the "ticket.cancelled' field instead of deleting entry
    def Cancel_tickets(self, ticket_id):
        try:
            cur = app.mysql.connection.cursor()
            cur.execute(
                "SELECT * FROM tickets WHERE (ticket_id = %s)", (ticket_id,))
            ticket = cur.fetchone()
            if ticket is None or ticket[5] == 1:
                return False
            cur.execute(
                "UPDATE seats SET is_occupied = 0 WHERE (theater_id = %s) and (seat_id = %s)", (ticket[2], ticket[3]))
            cur.execute(
                "UPDATE tickets SET cancelled = 1 WHERE (ticket_id = %s)", (ticket_id,))
            app.mysql.connection.commit()
            cur.close()

            self.Update_reward_point(False, ticket_id)
            return True
        except Exception as e:
            print(e)
            return False

    def Book_tickets(self, price, theater_id, seat_ids, schedule_id):
        for seat_id in seat_ids:
            cur = app.mysql.connection.cursor()
            # cur.execute("UPDATE seats SET is_occupied = 1 WHERE (theater_id = %s) and (seat_id = %s)", (seat[0], seat[1:]))
            # defaults: ticket_id (auto_inc, unique), cancelled=0, cancelled=False, timestamp=CURRENT_TIMESTAMP
            cur.execute("INSERT INTO tickets (price, theater_id, seat_id, user_id, schedule_id) VALUES (%s, %s, %s, %s, %s)",
                        (price, theater_id, seat_id, self.user_id, schedule_id))
            cur.execute("SELECT ticket_id FROM tickets WHERE (theater_id = %s) and (seat_id = %s) and (user_id = %s) and (schedule_id = %s)",
                        (theater_id, seat_id, self.user_id, schedule_id))
            ticket = cur.fetchone()
            app.mysql.connection.commit()
            cur.close()
            self.Update_reward_point(True, ticket[0])

    # P is premium member, R is regular member
    def Buy_membership(self, isUpgrade):
        cur = app.mysql.connection.cursor()
        membership = 'P' if isUpgrade else 'R'
        cur.execute("UPDATE users SET membership = %s WHERE (user_id = %s)",
                    (membership, self.user_id))
        app.mysql.connection.commit()
        cur.close()

    # P is premium member, R is regular member
    def Get_membership(self):
        cur = app.mysql.connection.cursor()
        cur.execute("SELECT * FROM users WHERE (user_id = %s)",
                    (self.user_id,))
        user = cur.fetchone()
        cur.close()
        return user[5]

 # add one point per dollar spent if buying, subtract if cancelling
    def Update_reward_point(self, isBuying, ticket_id):
        try:
            cur = app.mysql.connection.cursor()
            cur.execute("SELECT * FROM users WHERE (user_id = %s)",
                        (self.user_id,))
            user = cur.fetchone()
            cur.execute(
                "SELECT * FROM tickets WHERE (ticket_id = %s)", (ticket_id,))
            price = cur.fetchone()[1]
            if isBuying:
                cur.execute("UPDATE users SET reward_point = %s WHERE (user_id = %s)",
                            (user[6] + price, self.user_id))
            else:
                cur.execute("UPDATE users SET reward_point = %s WHERE (user_id = %s)",
                            (user[6] - price, self.user_id))
            app.mysql.connection.commit()
            cur.close()
            return True
        except Exception as e:
            print(e)
            return False

    # Return list of movies watched in past 30 days
    def Get_watch_history(self):
        try:
            cur = app.mysql.connection.cursor()
            cur.execute("""SELECT t.*, fs.film_id, m.title, m.thumbnail
            FROM tickets t
            INNER JOIN film_schedules fs ON t.schedule_id = fs.schedule_id
            INNER JOIN movies m ON fs.film_id = m.film_id
            WHERE t.user_id = %s AND DATE(NOW()) >= (DATE(t.timestamp) + INTERVAL 30 DAY)""", (self.user_id,))
            watchhistory = cur.fetchall()
            cur.close()
            return watchhistory
        except Exception as e:
            print(e)
            return None    

    def Get_purchase_history(self):
        cur = app.mysql.connection.cursor()
        cur.execute("SELECT * FROM tickets WHERE (user_id = %s)",
                    (self.user_id,))
        tickets = cur.fetchall()
        cur.close()
        return tickets

    def get_reward_point(self):
        cur = app.mysql.connection.cursor()
        cur.execute("SELECT * FROM users WHERE (user_id = %s)",
                    (self.user_id,))
        user = cur.fetchone()
        cur.close()
        return user[6]
