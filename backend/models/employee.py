from config import app

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
    def add_film_to_schedule(self, film_id, start_time):
        pass
    
    # TODO: implement these methods
    def remove_film_from_schedule(self, film_id, start_time):
        pass

    # TODO: implement these methods
    def update_film_schedule(self, film_id, start_time):
        pass