from flask import Blueprint, \
    render_template, \
    session, \
    Response, \
    jsonify, \
    make_response, \
    request, \
    json
import controllers.utility as utility
from models.employee import employee
from config import app
emp = Blueprint('employee', __name__)

with app.app_context():
    if app.redis.get('user_id') is not None:
        user_id = app.redis.get('user_id')
        Emp = employee(user_id)

@emp.route('/employee/search')
def search():
    search = request.args.get('query', '')
    output = utility.searchQueryMovies(search)
    return Response(json.dumps(output), status=200)

@emp.route('/employee/schedule', methods=['POST'])
def schedule():
    if request.method == 'POST':
        theater_id = request.json['theater_id']
        film_id = request.json['movie_id']
        start_time = request.json['start_time']

        inserted = Emp.add_film_to_schedule(theater_id, film_id, start_time)

        if inserted:
            output = {'message': 'success'}
            return Response(json.dumps(output), status=200)
        else:
            output = {'message': 'failed'}
            return Response(json.dumps(output), status=400)

@emp.route('/employee/ALL_MOVIE_SCHEDULE', methods=['GET'])
def ALL_MOVIE_SCHEDULE():
    if request.method == 'GET':
        output = utility.get_ALL_film_schedules_movies()
        return Response(json.dumps(output), status=200)
    
@emp.route('/employee/Remove', methods=['DELETE'])
def Remove():
    if request.method == 'DELETE':
        schedule_id = request.json['schedule_id']
        deleted = Emp.remove_film_from_schedule(schedule_id)
        if deleted: 
            output = {'message': 'success'}
            return Response(json.dumps(output), status=200)
        else:
            output = {'message': 'failed'}
            return Response(json.dumps(output), status=400)
    

    


