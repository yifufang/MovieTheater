from config import app


def get_all_theaters_name_id():
    cur = app.mysql.connection.cursor()
    cur.execute("SELECT theater_id, name FROM theaters", ())
    data = cur.fetchall()
    cur.close()
    return data


def get_movies_info_for_theater_A():
    cur = app.mysql.connection.cursor()
    cur.execute("SELECT title, movies.film_id, thumbnail FROM movies.schedules INNER JOIN movies ON movies.film_id = schedules.film_id WHERE theater_id = %s group by movies.film_id", ('a',))
    data = cur.fetchall()
    cur.close()
    return data

def get_movies_info_for_theater_B():
    cur = app.mysql.connection.cursor()
    cur.execute("SELECT title, movies.film_id, thumbnail FROM movies.schedules INNER JOIN movies ON movies.film_id = schedules.film_id WHERE theater_id = %s group by movies.film_id", ('b',))
    data = cur.fetchall()
    cur.close()
    return data

def get_movies_info_for_theater_C():
    cur = app.mysql.connection.cursor()
    cur.execute("SELECT title, movies.film_id, thumbnail FROM movies.schedules INNER JOIN movies ON movies.film_id = schedules.film_id WHERE theater_id = %s group by movies.film_id", ('c',))
    data = cur.fetchall()
    cur.close()
    return data

def get_movies_info_for_theater_D():
    cur = app.mysql.connection.cursor()
    cur.execute("SELECT title, movies.film_id, thumbnail FROM movies.schedules INNER JOIN movies ON movies.film_id = schedules.film_id WHERE theater_id = %s group by movies.film_id", ('d',))
    data = cur.fetchall()
    cur.close()
    return data

def get_film_schedules_given_theaterID_filmID(theater_id, movie_id):
    cur = app.mysql.connection.cursor()
    cur.execute("SELECT start_time FROM schedules WHERE theater_id = %s AND film_id = %s", (theater_id, movie_id,))
    data = cur.fetchall()
    cur.close()
    output = []
    for schedule in data:
        output.append(schedule[0])
    return output

def get_all_seats_given_theaterID(theater_id):
    cur = app.mysql.connection.cursor()
    cur.execute("SELECT seat_id, is_occupied FROM seats WHERE theater_id = %s", (theater_id,))
    data = cur.fetchall()
    cur.close()
    print(data)
    return data
