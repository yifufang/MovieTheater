from flask import Blueprint, \
    render_template, \
    session, \
    Response, \
    jsonify, \
    make_response, \
    request, \
    json
import controllers.searchQueryMovies as SQ
emp = Blueprint('employee', __name__)

@emp.route('/employee/search')
def search():
    search = request.args.get('query', '')
    output = SQ.searchQueryMovies(search)
    return Response(json.dumps(output), status=200)

