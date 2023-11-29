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

    ## Book tickets
    # frontend verifies if seats are valid through seat map, then asks backend to register.
    # Only need to update the "seat.is_occupied" in db and create a ticket for each seat purchased.
    def Book_tickets(self, price, seat_ids, schedule_id):
        cur = app.mysql.connection.cursor()
        for seat in seat_ids:
            cur.execute("UPDATE seats SET is_occupied = 1 WHERE (theater_id = %s) and (seat_id = %s)", (seat[0], seat[1:]))
             # defaults: ticket_id (auto_inc, unique), cancelled=0, cancelled=False, timestamp=CURRENT_TIMESTAMP
            cur.execute("INSERT INTO tickets (price, theater_id, seat_id, user_id, schedule_id) VALUES\
                        (%s, %s, %s, %s, %s)", (price, seat[0], seat[1:], self.user_id, schedule_id))
        app.mysql.connection.commit()
        cur.close()

    ## TODO: Cancel tickets
    def Cancel_tickets(self):
        pass


        # # open database connection, and fetch data from database
        # cur.execute("SELECT * FROM users WHERE user_id = %s", (user_id,))
        # user = cur.fetchone()
        # cur.close()
        # if user is None:
        #     raise Exception("User not found")
        
        # if existing_user:
        #     cur.close()
        #     return Response(json.dumps({'error': True, 'message': 'User registration failed, email already exists.'}), status=401)
        # else:
        #     # create a new user row to table
        #     cur = app.mysql.connection.cursor()
        #     cur.execute("INSERT INTO users (email, password, first_name, last_name) VALUES (%s, %s, %s, %s)",
        #                 (email, password, first_name, last_name))
        #     app.mysql.connection.commit()
        #     cur.close()
        #     return Response(json.dumps({'error': False, 'message': 'User registration successful'}), status=200)
        # pass


    ## TODO: user buy membership
    def Buy_membership(self):
        print("inside Buy_membership")
        pass
    
    ## TODO: track user reward point
    def Update_reward_point(self):
        pass
    
    # TODO:list of movies watched in past 30 days
    def Get_watch_history(self):
        pass

