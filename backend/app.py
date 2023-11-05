# from app.routes import app
from flask_jwt_extended import JWTManager
import os
from flask import Flask

app = Flask(__name__)
if __name__ == '__main__':
    app.run(debug=True)

# Setup the Flask-JWT-Extended extension
app.config["JWT_SECRET_KEY"] = os.environ.get('JWT_ACCESS_SECRET_TOKEN')  # Change this!
jwt = JWTManager(app)


'''from app.routes import app

from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_jwt_extended import JWTManager

# app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://username:password@localhost/db_name'

# Configure Flask-JWT-Extended
app.config['JWT_SECRET_KEY'] = 'your_secret_key'  # Change this to a secure secret key
app.config['JWT_ACCESS_TOKEN_EXPIRES'] = timedelta(days=1)

db = SQLAlchemy(app)
jwt = JWTManager(app)

if __name__ == '__main__':
    app.run(debug=True)
'''