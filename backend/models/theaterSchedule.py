from config import app


class theaterSchedule:
    def __init__(self, theater_id):
        # open database connection, and fetch data from database
        cur = app.mysql.connection.cursor()
        cur.execute(
            "SELECT * FROM film_schedules WHERE theater_id = %s", (theater_id,))
        schedules = cur.fetchone()
        cur.close()
        if schedules is None:
            raise Exception("Theater schedule not found")

        # dont change this
        self.theater_id = theater_id
        self.schedules = schedules
        # optional attribute

     # TODO: implement these methods
    def get_schedule(self, schedule_id):
        pass
