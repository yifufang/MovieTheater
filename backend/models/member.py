from config import app


class Member:
    def __init__(self, user_id):
        # open database connection, and fetch data from database
        cur = app.mysql.connection.cursor()
        cur.execute("SELECT * FROM users WHERE user_id = %s", (user_id,))
        user = cur.fetchone()
        cur.close()
        self.user_id = user_id
        self.email = user[1]
        self.first_name = user[3]
        self.last_name = user[4]
        self.membership = user[5]
        self.reward_point = user[6]

