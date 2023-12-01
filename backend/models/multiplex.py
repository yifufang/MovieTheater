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

with app.app_context():
    Multiplex = multiplex()