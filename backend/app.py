from flask import Flask, \
    render_template, \
    session, \
    Response, \
    jsonify, \
    make_response, \
    request, \
    json

# instances initialized here
from config import app
from models.multiplex import Multiplex

# routes here
from routes.auth import auth
from routes.emp import emp
from routes.other import other
from routes.book import book
from routes.member import member


# for api testing, modify here and go to '<your URL>/test'
@app.route('/test')
def test():
    output ='test'
    return Response(json.dumps(output), status=200)


# authentication routes
app.register_blueprint(auth)
app.register_blueprint(emp)
app.register_blueprint(other)
app.register_blueprint(book)
app.register_blueprint(member)


if __name__ == '__main__':
    app.run(debug=True)
