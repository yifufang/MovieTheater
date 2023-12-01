from models.theater import theater
from config import app

class multiplex:
    def __init__(self):
        self.theaters = {
            'a': theater('a'),
            'b': theater('b'),
            'c': theater('c'),
            'd': theater('d')
        }
    #get all theaters    
    def getTheaters(self):
        cur = app.mysql.connection.cursor()
        cur.execute("SELECT * FROM theaters")
        data = cur.fetchall()
        cur.close()
        return data

with app.app_context():
    Multiplex = multiplex()
