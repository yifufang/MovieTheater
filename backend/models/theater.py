from config import app


class Theater:
    def __init__(self, theater_id):
        # open database connection, and fetch data from database
        cur = app.mysql.connection.cursor()
        cur.execute("SELECT * FROM theaters WHERE theater_id = %s", (theater_id,))
        theater = cur.fetchone()
        self.theater_id = theater_id
        self.name = theater[1]
        self.address = theater[2]
        cur.execute("SELECT * FROM theaters WHERE theater_id = %s", (theater_id,))
        theater = cur.fetchone()
        cur.close()
        self.seats = []