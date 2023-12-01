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
from routes.emp import emp
from routes.book import book


# for api testing, modify here and go to '<your URL>/test'
@app.route('/test')
def test():
    output ='test'
    return Response(json.dumps(output), status=200)


# authentication routes
app.register_blueprint(auth)
app.register_blueprint(emp)
app.register_blueprint(book)


if __name__ == '__main__':
    app.run(debug=True)
