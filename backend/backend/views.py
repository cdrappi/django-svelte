import json

from django.contrib.auth.models import User
from django.http.response import HttpResponseBadRequest, JsonResponse
from django.middleware.csrf import get_token
from django.views.decorators.csrf import csrf_exempt
from rest_framework import permissions, status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView

from backend.serializers import UserSerializer, UserSerializerWithToken


def create_csrf_token(request: HttpRequest) -> JsonResponse:
    """
    :param request: (HttpRequest)
    :return: (JsonResponse)
    """
    return JsonResponse({'csrf_token': get_token(request)})

@api_view(["GET"])
def current_user(request):
    """
    Determine the current user by their token, and return their data
    """
    serializer = UserSerializer(request.user)
    return Response(serializer.data)


class UserList(APIView):
    """
    Create a new user. It's called 'UserList' because normally we'd have a get
    method here too, for retrieving a list of all User objects.
    """

    permission_classes = (permissions.AllowAny,)

    def post(self, request, format=None):
        serializer = UserSerializerWithToken(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def get(self, request):
        try:
            other_users = User.objects.exclude(id=request.user.id)
            serializer = UserSerializer(other_users, many=True)
            return Response(serializer.data)
        except:
            return Response([])
