from config import app


class filmSchedule:
    def __init__(self, schedule_id):
        # open database connection, and fetch data from database
        cur = app.mysql.connection.cursor()
        cur.execute("SELECT * FROM film_schedule WHERE schedule_id = %s", (schedule_id,))
        film_schedule = cur.fetchone()
        cur.close()
        if film_schedule is None:
            raise Exception("Film schedule not found")
        ## dont change this
        self.schedule_id = schedule_id
        self.theater_id = film_schedule[1]
        self.film_id = film_schedule[2]
        self.start_time = film_schedule[3]
        ##optional attribute

        
        
    