# Remote library imports
from flask import request, make_response, session, jsonify
from flask_restful import Resource
import ipdb
from flask_migrate import Migrate

# Local imports
from config import app, api, db
# Add your model imports
#from models import User, Prediction, Game, Comment

@app.route('/')
def hello():
    return '<h1>Capstone Project</h1>'

if __name__ == '__main__':
    app.run(port=5555, debug=True)