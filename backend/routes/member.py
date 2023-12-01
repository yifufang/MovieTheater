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

@member.route('/member', methods=['POST'])
def get_user_info():
    if request.method == 'POST':
        myUser = user(app.redis.get('user_id'))
        member = myUser.Get_membership()
        movies = myUser.Get_watch_history()

        ret = {"error": False, 
               "membership": member, 
               "movies": movies}
        return Response(json.dumps(ret), status=200)