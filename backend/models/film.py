from config import app


class Film:
    def __init__(self, film_id):
        # open database connection, and fetch data from database
        cur = app.mysql.connection.cursor()
        cur.execute("SELECT * FROM films WHERE film_id = %s", (film_id,))
        film = cur.fetchone()
        cur.close()
        self.film_id = film_id
        self.title = film[1]
        self.description = film[2]
        self.release_year = film[3]
        self.duration = film[4]
        self.rating = film[5]
        self.genre = film[6]
        self.price = film[7]