from flask import Blueprint, \
    render_template, \
    session, \
    Response, \
    jsonify, \
    make_response, \
    request, \
    json
from controllers import booking


book = Blueprint('book', __name__)


@book.route('/book/movies', methods=['POST'])
def get_theaters_movies():
    if request.method == 'POST':
        theater_id = request.json["theater_id"]
        theaters = booking.get_all_theaters_name_id()
        theaterA_movies_info = booking.get_movies_info_for_theater_A()
        print(theaterA_movies_info)
        theaterB_movies_info = booking.get_movies_info_for_theater_B()
        theaterC_movies_info = booking.get_movies_info_for_theater_C()
        theaterD_movies_info = booking.get_movies_info_for_theater_D()

        res = {"error": False, 
               "theaters": theaters, 
               "moviesInfoTheaterA": theaterA_movies_info,
               "moviesInfoTheaterB": theaterB_movies_info,
               "moviesInfoTheaterC": theaterC_movies_info,
               "moviesInfoTheaterD": theaterD_movies_info}
        return Response(json.dumps(res), status=200)

@book.route('/book/schedules', methods=['POST'])
def get_schedules():
    if request.method == 'POST':
        theater_id = request.json["theater_id"]
        film_id = request.json["film_id"]
        schedules = booking.get_film_schedules_given_theaterID_filmID(theater_id, film_id)
        return Response(json.dumps(schedules), status=200)
    