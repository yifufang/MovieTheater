from config import app


class movie:
    def __init__(self, film_id):
        # open database connection, and fetch data from database
        cur = app.mysql.connection.cursor()
        cur.execute("SELECT * FROM films WHERE film_id = %s", (film_id,))
        film = cur.fetchone()
        cur.close()
        if film is None:
            raise Exception("Film not found")
        ## dont change this
        self.film_id = film_id
        self.title = film[1]
        self.year = film[2]
        self.cast = film[3]
        self.genres = film[4]
        self.extract = film[5]
        self.thumbnail = film[6]

        ##optional attribute