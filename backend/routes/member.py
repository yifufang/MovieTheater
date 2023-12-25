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
from controllers import utility
from config import app

member = Blueprint('member', __name__)


@member.route('/member/purchase_history', methods=['GET'])
def purchase_history():
    if request.method == 'GET':
        if app.redis.get('user_id') is not None and utility.check_if_user(app.redis.get('user_id')):
            user_id = app.redis.get('user_id')
            User = user(user_id)
        history = User.Get_purchase_history()
        return Response(json.dumps(history), status=200)

@member.route('/member/cancel_ticket', methods=['PUT'])
def cancel_ticket():
    if request.method == 'PUT':
        ticket_id = request.json['ticket_id']
        if app.redis.get('user_id') is not None and utility.check_if_user(app.redis.get('user_id')):
            user_id = app.redis.get('user_id')
            User = user(user_id)
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

@member.route('/member/getRewardsMembership', methods=['GET'])
def getRewards():
    if request.method == 'GET':
        if app.redis.get('user_id') is not None and utility.check_if_user(app.redis.get('user_id')):
            user_id = app.redis.get('user_id')
            User = user(user_id)
        rewards = User.get_reward_point()
        membership = User.Get_membership()
        if rewards is None or membership is None:
            return Response(json.dumps({'message': 'fail'}), status=400)
        
        output = {'message':'success','rewards': rewards, 'membership': membership}
        return Response(json.dumps(output), status=200)

@member.route('/member/WatchHistory', methods=['GET'])
def WatchHistory():
    if request.method == 'GET':
        if app.redis.get('user_id') is not None and utility.check_if_user(app.redis.get('user_id')):
            user_id = app.redis.get('user_id')
            User = user(user_id)
        history = User.Get_watch_history()
        if history is None:
            return Response(json.dumps({'message': 'fail'}), status=400)
        else:
            return Response(json.dumps(history), status=200)
    
@member.route('/member/changeMembership', methods=['POST'])
def change_membership():
    if request.method == 'POST':
        is_upgrade = request.json['is_upgrade']
        if app.redis.get('user_id') is not None and utility.check_if_user(app.redis.get('user_id')):
            user_id = app.redis.get('user_id')
            User = user(user_id)
        upgraded = User.Buy_membership(is_upgrade)
    print(upgraded)
    output = {'message': 'success'}
    return Response(json.dumps(output), status=200)

