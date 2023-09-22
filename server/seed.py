# Standard library imports
from random import randint, choice as rc
import random
# Remote library imports
from faker import Faker

# Local imports
from app import app
from models import db, Game, User, Prediction, Comment

fake = Faker()

if __name__ == '__main__':
    with app.app_context():
        pass