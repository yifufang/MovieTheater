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

from models.employee import employee
from models.user import user

# authentication routes
# app.register_blueprint(member)

# for api testing, modify here and go to '<your URL>/test'
@app.route('/test')
def test():
    output ='test'
    myUser = user(app.redis.get('user_id'))
    # def Book_tickets(self, price, seat_ids, schedule_id):
    price = 10.00
    seat_ids = ['a3', 'a5']
    # seat_ids = ['a2', 'a4', 'b21']
    schedule_id = "3"
    myUser.Book_tickets(price, seat_ids, schedule_id)
    # myUser.Cancel_tickets(seat_ids)
    # myUser.Buy_membership(False)
    myUser.Buy_membership(True)
    # print(myUser.Get_watch_history())
    print(myUser.Get_membership(8)) # 8 is tony@tony
    return Response(json.dumps(output), status=200)


# authentication routes
app.register_blueprint(auth)
app.register_blueprint(emp)
app.register_blueprint(other)
app.register_blueprint(book)


if __name__ == '__main__':
    app.run(debug=True)
