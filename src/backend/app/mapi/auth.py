from flask import g
from flask_httpauth import HTTPBasicAuth, HTTPTokenAuth
from flask_login import current_user
from app.models import UserModel, UserSchema
from app.utils import bad_request, normal_request, query_request
from werkzeug.security import generate_password_hash, check_password_hash
import jwt
from flask_jwt_extended import (JWTManager, jwt_required, create_access_token,
                                get_jwt_identity)

basic_auth = HTTPBasicAuth()
token_auth = HTTPTokenAuth()


@basic_auth.verify_password
def verify_password(username, password):
    user = UserModel.query.filter_by(username=username).first()
    if user is None:
        return False
    g.current_user = user
    return user.check_password(password)


@basic_auth.error_handler
def basic_auth_error():
    return bad_request('auth fail')


@token_auth.verify_token
def verify_token(token):
    g.current_user = UserModel.check_token(token) if token else None
    return g.current_user is not None


@token_auth.error_handler
def token_auth_error():
    return bad_request('auth fail')
