from config import app


def get_all_theaters_name_id():
    cur = app.mysql.connection.cursor()
    cur.execute("SELECT theater_id, name FROM theaters", ())
    data = cur.fetchall()
    cur.close()
    return data

def get_film_schedules_given_theaterID_filmID(theater_id, movie_id):
    cur = app.mysql.connection.cursor()
    cur.execute("SELECT schedule_id, start_time FROM film_schedules WHERE theater_id = %s AND film_id = %s", (theater_id, movie_id,))
    data = cur.fetchall()
    cur.close()
    return data

def get_all_occupied_seats_given_scheduleID(schedule_id):
    cur = app.mysql.connection.cursor()
    cur.execute("SELECT seat_id, cancelled FROM tickets WHERE schedule_id = %s", (schedule_id,))
    data = cur.fetchall()
    cur.close()
    return data

def get_all_seats_given_theaterID(theater_id):
    cur = app.mysql.connection.cursor()
    cur.execute("SELECT seat_id, is_occupied FROM seats WHERE theater_id = %s", (theater_id,))
    data = cur.fetchall()
    cur.close()
    return data

def get_available_seats(allSeats, occupiedSeats):
    available_seats = [list(seat) for seat in allSeats]
    for i in range(len(available_seats)):
        for j in range(len(occupiedSeats)):
            if occupiedSeats[j][0] == allSeats[i][0] and occupiedSeats[j][1] == 0:
                available_seats[i][1] = 1

    return available_seats
