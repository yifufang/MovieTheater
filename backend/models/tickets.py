from config import app

class ticket:
    def __init__(self, ticket_id):
        # open database connection, and fetch data from database
        cur = app.mysql.connection.cursor()
        cur.execute("SELECT * FROM tickets WHERE ticket_id = %s", (ticket_id,))
        Ticket = cur.fetchone()
        cur.close()
        
        if Ticket is None:
            raise Exception("Ticket not found")
        
        ## dont change this
        self.ticket_id = ticket_id
        self.price = Ticket[1]
        self.theater_id = Ticket[2]
        self.seat_id = Ticket[3]
        self.user_id = Ticket[4]
        self.cancelled = Ticket[5]
        self.schedule_id = Ticket[6]
        self.time_bought = Ticket[7]

        ##optional attribute
        self.discountable =False
    
    ## TODO: calculate price need to consider membership
    def calculate_price(self):
        pass
    
    ## TODO: check if ticket is discountable
    def discountable(self):
        pass