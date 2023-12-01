from flask import Blueprint, \
    render_template, \
    session, \
    Response, \
    jsonify, \
    make_response, \
    request, \
    json
from models.user import user
from models.filmSchedule import filmSchedule
from config import app

member = Blueprint('member', __name__)

with app.app_context():
    if app.redis.get('user_id') is not None:
        user_id = app.redis.get('user_id')
        User = user(user_id)


@member.route('/member/purchase_history', methods=['GET'])
def purchase_history():
    if request.method == 'GET':
        history = User.Get_purchase_history()
        return Response(json.dumps(history), status=200)

@member.route('/member/cancel_ticket', methods=['PUT'])
def cancel_ticket():
    if request.method == 'PUT':
        ticket_id = request.json['ticket_id']
        cancelled = User.Cancel_tickets(ticket_id)
        if cancelled:
            output = {'message': 'success'}
            return Response(json.dumps(output), status=200)
        else:
            output = {'message': 'fail'}
            return Response(json.dumps(output), status=400)

@member.route('/member/get_schedule_time', methods=['POST'])
def get_schedule_time():
    if request.method == 'POST':
        schedule_id = request.json['schedule_id']
        if schedule_id is None:
            output = {'message': 'fail'}
            return Response(json.dumps(output), status=400)
        
        schedule = filmSchedule(schedule_id)
        schedule_time = schedule.get_start_time()
        output = {'message': 'success', 'schedule_time': schedule_time}
        return Response(json.dumps(output), status=200)

@member.route('/member/getRewards', methods=['GET'])
def getRewards():
    if request.method == 'GET':
        rewards = User.get_reward_point()
        return Response(json.dumps(rewards), status=200)
    
        