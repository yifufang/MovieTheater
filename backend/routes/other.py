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

other = Blueprint('other', __name__)

@other.route('/other/GetAllMovieSchedule', methods=['GET'])
def GetAllMovieSchedule():
    if request.method == 'GET':
        output = utility.get_ALL_film_schedules_movies2()
        return Response(json.dumps(output), status=200)