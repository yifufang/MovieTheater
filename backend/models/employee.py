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

    
    # TODO: implement these methods
    def add_film_to_schedule(self, theater_id, film_id, start_time):
        if theater_id is None or film_id is None or start_time is None:
            return False
        try:
            start_time = datetime.strptime(start_time, '%Y-%m-%d %H:%M:%S')
            cur = app.mysql.connection.cursor()
            cur.execute("INSERT INTO film_schedules (theater_id, film_id, start_time) VALUES (%s, %s, %s)", (theater_id, film_id, start_time))
            app.mysql.connection.commit()
            cur.close()
            return True
        except Exception as e:
            print(e)
            return False
    
    # TODO: implement these methods
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

    # TODO: implement these methods
    def update_film_schedule(self, film_id, start_time):
        pass