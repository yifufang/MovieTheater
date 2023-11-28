from flask import Blueprint, request, Response, jsonify, json, session
import jwt
from config import app


# authentication routes
auth = Blueprint('auth', __name__)

@auth.route('/auth/login', methods=['POST'])
def login():
    if request.method == 'POST':
        # get user input
        email = request.json["email"]
        password = request.json["password"]

        # open database connection, and fetch data from database
        cur = app.mysql.connection.cursor()
        cur.execute("SELECT * FROM users WHERE email = %s AND password = %s", (email, password))
        user = cur.fetchone()
        cur.close()
        
        # check user in table exist or not, the data fetched from database
        if user:
            user_id = user[0]
            first_name = user[3]
            last_name = user[4]
            membership = user[5]
            reward_point = user[6]

            # add jwt token
            token = jwt.encode({'email': user_id}, app.secret_key, algorithm='HS256')
            # store user class object and token into server-side session (redis)
            # app.redis.set('token', token)
            app.redis.set('user_id', user_id)

            data = {'user_id': user_id, 'email': email, 'first_name': first_name, 'last_name': last_name, 'membership': membership,
                    'reward_point': reward_point}

            # return the user data fetched from database to frontend
            return Response(json.dumps({'message': 'success', 'error': False, 'data': data, 'token': token}), status=200)
        else:
            # return error message to frontend
            return Response(json.dumps({'message': 'Incorrect email or password. Please try again.', 'error': True}), status=401)


@auth.route('/auth/signup', methods=['POST'])
def signup():
    if request.method == 'POST':
        # get user input
        email = request.json["email"]
        password = request.json["password"]
        first_name = request.json["first_name"]
        last_name = request.json["last_name"]
        cur = app.mysql.connection.cursor()
        cur.execute("SELECT * FROM users WHERE email = %s", (email,))
        existing_user = cur.fetchone()

        if existing_user:
            cur.close()
            return Response(json.dumps({'error': True, 'message': 'User registration failed, email already exists.'}), status=401)
        else:
            # create a new user row to table
            cur = app.mysql.connection.cursor()
            cur.execute("INSERT INTO users (email, password, first_name, last_name) VALUES (%s, %s, %s, %s)",
                        (email, password, first_name, last_name))
            app.mysql.connection.commit()
            cur.close()
            return Response(json.dumps({'error': False, 'message': 'User registration successful'}), status=200)


@auth.route('/auth/logout', methods=['GET'])
def logout():
    if request.method == 'POST':
        app.redis.flushall()
    return Response(json.dumps({'message': 'Successfully logged out'}), status=200)
