from config import app


class theater:
    def __init__(self, theater_id):
        # open database connection, and fetch data from database
        cur = app.mysql.connection.cursor()
        cur.execute("SELECT * FROM film_schedules inner join theaters on film_schedules.theater_id = theaters.theater_id WHERE film_schedules.theater_id = %s order by start_time", (theater_id,))
        theater = cur.fetchall()
        cur.close()
        if theater is None:
            raise Exception("Theater not found")
        # dont change this
        self.theater_id = theater_id
        self.name = theater[0][5]
        self.address = theater[0][6]

    # TODO: implement these methods
    def check_available_seat(self):
        cur = app.mysql.connection.cursor()
        cur.execute(
            "SELECT * FROM seats WHERE is_occupied = %s and theater_id = %s", (0, self.theater_id))
        seats = cur.fetchall()
        cur.execute(
            "SELECT COUNT(*) FROM seats WHERE theater_id = %s", (self.theater_id,))
        total_seats = cur.fetchone()
        cur.close()
        
        return {
            'seats': seats,
            'number_of_available_seats': len(seats),
            'number_of_seats': total_seats[0]
        }

    def fetch_film_schedules(self):
        cur = app.mysql.connection.cursor()
        cur.execute(
            "SELECT * FROM film_schedules where theater_id = %s order by start_time", (self.theater_id,))
        film_schedules = cur.fetchall()
        cur.close()
        return film_schedules
