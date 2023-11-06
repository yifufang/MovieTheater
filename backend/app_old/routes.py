from flask import Flask, \
    render_template, \
    session, \
    Response, \
    jsonify, \
    make_response, \
    request, \
    json

from datetime import timedelta
from flask_cors import CORS

# CORS(app)    