from config import app


class theater:
    def __init__(self, theater_id):
        # open database connection, and fetch data from database
        cur = app.mysql.connection.cursor()
        cur.execute("SELECT * FROM theaters WHERE theater_id = %s", (theater_id,))
        theater = cur.fetchone()
        cur.close()
        if theater is None:
            raise Exception("Theater not found")
        ## dont change this
        self.theater_id = theater_id
        self.name = theater[1]
        self.address = theater[2]
        
        self.seats = []

    ## TODO: implement these methods
    def check_available_seat(self):
        pass

    ## TODO: implement these methods
    def seat_assignment(self):
        pass
        
