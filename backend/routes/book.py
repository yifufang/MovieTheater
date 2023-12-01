from flask import Blueprint, \
    render_template, \
    session, \
    Response, \
    jsonify, \
    make_response, \
    request, \
    json
from controllers import booking
from controllers import utility
from models.user import user
from config import app

PRICE = 10
SERVICE_FEE = 1.5
book = Blueprint('book', __name__)

with app.app_context():
    if app.redis.get('user_id') is not None and utility.check_if_user(app.redis.get('user_id')):
        user_id = app.redis.get('user_id')
        user = user(user_id)

@book.route('/book/movies', methods=['POST'])
def get_theaters_movies():
    if request.method == 'POST':
        theater_id = request.json["theater_id"]
        theaters = booking.get_all_theaters_name_id()
        theaters_movies_info = utility.get_ALL_film_schedules_movies()

        res = {"error": False, 
               "theaters": theaters, 
               "moviesInfoTheater": theaters_movies_info}
        return Response(json.dumps(res), status=200)

@book.route('/book/schedules', methods=['POST'])
def get_schedules():
    if request.method == 'POST':
        theater_id = request.json["theater_id"]
        film_id = request.json["film_id"]
        schedules = booking.get_film_schedules_given_theaterID_filmID(theater_id, film_id)
        return Response(json.dumps(schedules), status=200)
    
@book.route('/book/seats', methods=['POST'])
def get_seats():
    if request.method == 'POST':
        schedule_id = request.json["schedule_id"]
        theater_id = request.json["theater_id"]
        # get number of occupied seats from tickets table
        occupied_seats = booking.get_all_occupied_seats_given_scheduleID(schedule_id)

        # get total number of seats from seats table
        allSeats = booking.get_all_seats_given_theaterID(theater_id)
        availableSeats = booking.get_available_seats(allSeats, occupied_seats)
        print(availableSeats)
        return Response(json.dumps(availableSeats), status=200)
    
@book.route('/book/order', methods=['POST'])
def order_tickets():
    if request.method == 'POST':
        theater_id = request.json["theater_id"]
        schedule_id = request.json["schedule_id"]
        ordered_seats = request.json["ordered_seats"]
        print(ordered_seats)
        print(user.membership)
        if user.membership == 'R':
            print('book ticket')
            user.Book_tickets(PRICE + SERVICE_FEE, theater_id, ordered_seats, schedule_id)
        elif user.membership == 'P':
            print('book ticket')
            user.Book_tickets(PRICE, theater_id, ordered_seats, schedule_id)
        res = {'error': False, 'message':"succeed"}
        return Response(json.dumps(res), status=200)
