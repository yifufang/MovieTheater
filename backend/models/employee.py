from config import app
from datetime import datetime

class employee:
    def __init__(self, employee_id):
        # open database connection, and fetch data from database
        cur = app.mysql.connection.cursor()
        cur.execute("SELECT * FROM users WHERE user_id = %s and membership = %s", (employee_id, 'E'))
        employee = cur.fetchone()
        cur.close()
        if employee is None:
            raise Exception("Employee not found")
        
        ## dont change this
        self.employee_id = employee_id
        self.email = employee[1]
        self.password = employee[2]
        self.first_name = employee[3]
        self.last_name = employee[4]
        self.membership = employee[5]
        
    
    # add film to schedule
    def add_film_to_schedule(self, theater_id, film_id, start_time):
        if theater_id is None or film_id is None or start_time is None:
            return False
        start_time = datetime.strptime(start_time, '%Y-%m-%d %H:%M:%S')
        cur = app.mysql.connection.cursor()
        cur.execute("""SELECT COUNT(*) FROM film_schedules WHERE theater_id = %s AND ABS(TIMESTAMPDIFF(HOUR, start_time, %s)) < 2 """, (theater_id, start_time))
        count = cur.fetchone()[0]

        if count > 0:
            cur.close()
            return False
        else:
            print('inserting even though theres ', count)
            cur.execute("INSERT INTO film_schedules (theater_id, film_id, start_time) VALUES (%s, %s, %s)", (theater_id, film_id, start_time))
            app.mysql.connection.commit()
            cur.close()
            return True
    
    # remove film from schedule
    def remove_film_from_schedule(self, schedule_id):
        if schedule_id is None:
            return False
        try:
            cur = app.mysql.connection.cursor()
            cur.execute("DELETE FROM film_schedules WHERE schedule_id = %s", (schedule_id,))
            app.mysql.connection.commit()
            cur.close()
            return True
        except Exception as e:
            print(e)
            return False

    # add seats to one of the theater
    def add_seats_to_theater(self, theater_id, number_of_seats):
        if theater_id is None or number_of_seats is None:
            return False
        try:
            cur = app.mysql.connection.cursor()
            for i in range(int(number_of_seats)):
                cur.execute("INSERT INTO seats (theater_id, is_occupied) VALUES (%s, %s)", (theater_id, 0))
            app.mysql.connection.commit()
            cur.close()
            return True
        except Exception as e:
            print(e)
            return False
        
    # remove seats from one of the theater
    def remove_seats_from_theater(self, theater_id, number_of_seats):
        if theater_id is None or number_of_seats is None:
            return False
        try:
            number_of_seats = int(number_of_seats)
            cur = app.mysql.connection.cursor()
            cur.execute("SELECT * FROM seats WHERE theater_id = %s and is_occupied = %s", (theater_id, 0))
            seats = cur.fetchall()
            if len(seats) < number_of_seats:
                return False
            for i in range(number_of_seats):
                cur.execute("DELETE FROM seats WHERE seat_id = %s", (seats[i][0],))
            app.mysql.connection.commit()
            cur.close()
            return True
        except Exception as e:
            print(e)
            return False



