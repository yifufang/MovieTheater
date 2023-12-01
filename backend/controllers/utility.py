from config import app

def get_ALL_film_schedules_movies():
    cur = app.mysql.connection.cursor()
    cur.execute("SELECT * FROM film_schedules INNER JOIN movies ON film_schedules.film_id = movies.film_id ORDER BY start_time ASC")
    film_schedules = cur.fetchall()
    cur.close()
    a = [i for i in film_schedules if i[1] == 'a']
    b = [i for i in film_schedules if i[1] == 'b']
    c = [i for i in film_schedules if i[1] == 'c']
    d = [i for i in film_schedules if i[1] == 'd']
    return {'a': a, 'b': b, 'c': c, 'd': d}

def get_ALL_film_schedules_movies2():
    cur = app.mysql.connection.cursor()
    cur.execute("SELECT * FROM film_schedules INNER JOIN movies ON film_schedules.film_id = movies.film_id ORDER BY start_time ASC")
    film_schedules = cur.fetchall()
    cur.close()
    return film_schedules[:20]

def searchQueryMovies(search):
    cur = app.mysql.connection.cursor()
    cur.execute("SELECT * FROM movies WHERE title LIKE %s OR film_id LIKE %s LIMIT 20", (search + '%', search + '%'))
    movies = cur.fetchall()
    cur.close()
    return movies

def check_if_employee(user_id):
    cur = app.mysql.connection.cursor()
    cur.execute("SELECT * FROM users WHERE user_id = %s AND membership = 'E'", (user_id,))
    data = cur.fetchall()
    cur.close()
    if data:
        return True
    else:
        return False