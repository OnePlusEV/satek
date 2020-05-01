from django.contrib.auth import authenticate
from django.contrib.auth.models import User
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.authtoken.models import Token
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response

from api.serializers import RegistrationSerializer, LoginSerializer, NewsSerializer
from news.models import Articles

from rest_framework.status import (
    HTTP_404_NOT_FOUND,
    HTTP_200_OK,
    HTTP_400_BAD_REQUEST
)


@csrf_exempt
@api_view(["POST"])
@permission_classes((AllowAny,))
def registration(request):
    serializer = RegistrationSerializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    if User.objects.filter(username=serializer.validated_data["username"]).exists():
        return Response({"error": "Пользователь с таким ником уже существует"},
                        status=HTTP_400_BAD_REQUEST)
    if serializer.validated_data["password"] != serializer.validated_data["password_confirm"]:
        return Response({"error": "Введенные пароли не совпадают"},
                        status=HTTP_400_BAD_REQUEST)
    user = User.objects.create_user(username=serializer.validated_data["username"],
                             email=serializer.validated_data["email"],
                             password=serializer.validated_data["password"])
    token, _ = Token.objects.get_or_create(user=user)
    return Response({'token': token.key}, status=HTTP_200_OK)


@csrf_exempt
@api_view(["POST"])
@permission_classes((AllowAny,))
def login(request):
    serializer = LoginSerializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    user = authenticate(username=serializer.validated_data["username"],
                        password=serializer.validated_data["password"])
    if not user:
        return Response({"error": "Такого польщователя несуществует, или вы неверно ввели пароль"},
                        status=HTTP_400_BAD_REQUEST)
    token, _ = Token.objects.get_or_create(user=user)
    return Response({'token': token.key}, status=HTTP_200_OK)


@csrf_exempt
@api_view(["GET"])
@permission_classes((IsAuthenticated,))
def news(request):
    serializer = NewsSerializer(Articles.objects.all(), many=True)
    return Response(serializer.data)
