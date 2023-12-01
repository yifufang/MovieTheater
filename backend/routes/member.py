from flask import Blueprint, \
    render_template, \
    session, \
    Response, \
    jsonify, \
    make_response, \
    request, \
    json
from models.user import user
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