# Purpose: To get all movies from the database where matches search query
from config import app

def searchQueryMovies(search):
    cur = app.mysql.connection.cursor()
    cur.execute("SELECT * FROM movies WHERE title LIKE %s OR film_id LIKE %s LIMIT 20", (search + '%', search + '%'))
    movies = cur.fetchall()
    cur.close()
    return movies