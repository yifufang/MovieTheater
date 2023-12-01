from flask import Blueprint, \
    render_template, \
    session, \
    Response, \
    jsonify, \
    make_response, \
    request, \
    json
import controllers.utility as utility
from config import app
from models.multiplex import Multiplex

other = Blueprint('other', __name__)

@other.route('/other/GetAllMovieSchedule', methods=['GET'])
def GetAllMovieSchedule():
    if request.method == 'GET':
        output = utility.get_ALL_film_schedules_movies2()
        return Response(json.dumps(output), status=200)

@other.route('/other/GetAailableSeats', methods=['GET'])
def GetAailableSeats():
    if request.method == 'GET':
        a = Multiplex.theaters['a'].check_available_seat()
        b = Multiplex.theaters['b'].check_available_seat()
        c = Multiplex.theaters['c'].check_available_seat()
        d = Multiplex.theaters['d'].check_available_seat()

        output = {
            'a': a,
            'b': b,
            'c': c,
            'd': d
        }
        return Response(json.dumps(output), status=200)