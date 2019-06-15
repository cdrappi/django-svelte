"""
https://stackoverflow.com/a/50831135
"""

from django.contrib.auth.middleware import get_user
from django.utils.functional import SimpleLazyObject
from rest_framework_jwt.authentication import JSONWebTokenAuthentication


class AuthenticationMiddlewareJWT:

    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        request.user = SimpleLazyObject(lambda: self.__class__.get_jwt_user(request))
        return self.get_response(request)

    @staticmethod
    def get_jwt_user(request):
        """

        :param request:
        :return:
        """
        user = get_user(request)
        if user.is_authenticated:
            return user
        jwt_authentication = JSONWebTokenAuthentication()
        if jwt_authentication.get_jwt_value(request):
            user, jwt = jwt_authentication.authenticate(request)
        return user
