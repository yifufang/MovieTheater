"""
On Mac, need to go to /teamproject-team-alpha-1/backend/,
create a virtual env (python3.9 -m venv myenv) then activate
the virtual environment (. myenv/bin/activate).
"""
# It's fine to include session bc we are including flask_session which is
# server-sided session which is more secure than client-sided
# Another note, must be using "pip install Werkzeug==2.3.7" otherwise error
# from flask import Flask, render_template, request, jsonify, session
# from flask_bcrypt import Bcrypt
# from flask_login import UserMixin
# from flask_session import Session
# from flask_cors import CORS
# from datetime import datetime

from flask import Flask, \
    render_template, \
    session, \
    Response, \
    jsonify, \
    make_response, \
    request, \
    json
from config import app
from routes.auth import auth

from models.employee import employee
from models.user import user


# for api testing, modify here and go to '<your URL>/test'
@app.route('/test')
def test():
    output ='test'
    myUser = user(app.redis.get('user_id'))
    # def Book_tickets(self, price, seat_ids, schedule_id):
    price = 10.00
    seat_ids = ['a3', 'a5']
    schedule_id = "3"
    print(myUser.Book_tickets(price, seat_ids, schedule_id))
    return Response(json.dumps(output), status=200)


# authentication routes
app.register_blueprint(auth)

if __name__ == '__main__':
    app.run(debug=True)




# db = SQLAlchemy()
# app = Flask(__name__)
# app.config.from_object(ApplicationConfig)
# cors = CORS(app, supports_credentials=True)
# db.init_app(app)
# server_session = Session(app)
#
# class User(db.Model, UserMixin):
#     id = db.Column(db.Integer, primary_key=True, unique=True, autoincrement=True)
#     email = db.Column(db.String[40], nullable=False, unique=True)
#     password = db.Column(db.String[80], nullable=False)
#     dateCreated = db.Column(db.Date, default=datetime.utcnow)
#
# with app.app_context():
#     db.create_all()
#
# bcrypt = Bcrypt(app)
#
# @app.route("/@me")
# def get_current_user():
#     user_id = session.get("user_id")
#     if not user_id:
#         return jsonify({"error" : "Not a valid user"}), 401
#
#     user = User.query.filter_by(id=user_id).first()
#     return jsonify({
#         "id": user.id,
#         "email": user.email
#     })
#
# @app.route("/register", methods=['GET', 'POST'])
# def register():
#     email = request.json["email"]
#     password = request.json["password"]
#
#     user = User.query.filter_by(email=email).first()
#     if user is not None:
#         return jsonify({"error" : "User already exists"}), 409
#
#     hashed_password = bcrypt.generate_password_hash(password)
#
#     user = User(email=email, password=password)
#     db.session.add(user)
#     db.session.commit()
#
#     session["user_id"] = user.id
#
#     return jsonify({
#         "id": user.id,
#         "email": user.email
#     })
#
# @app.route("/login", methods=['GET', 'POST'])
# def login():
#     email = request.json["email"]
#     password = request.json["password"]
#
#     user = User.query.filter_by(email=email).first()
#     if user is None:
#         return jsonify({"error" : "Account not found"}), 401
#     if not bcrypt.check_password_hash(user.password, password):
#         return jsonify({"error" : "Incorrect email or password"}), 401
#
#     session["user_id"] = user.id
#
#     return jsonify({
#         "id": user.id,
#         "email": user.email
#     })
#
# @app.route("/logout", methods=["POST"])
# def logout_user():
#     session.pop("user_id")
#     return "200"
#
# # @app.route('/test')
# # def test():
# #     output = 'testing'
# #     return Response(json.dumps(output), status=200)
#
# if __name__ == '__main__':
#     app.run(debug=True)
