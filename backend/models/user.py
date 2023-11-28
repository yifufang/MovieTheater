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

    ## TODO: Book tickets
    def Book_tickets(self):
        pass

    ## TODO: Cancel tickets
    def Cancel_tickets(self):
        pass
    ## TODO: user buy membership
    def Buy_membership(self):
        pass
    
    ## TODO: track user reward point
    def Update_reward_point(self):
        pass
    
    # TODO:list of movies watched in past 30 days
    def Get_watch_history(self):
        pass

