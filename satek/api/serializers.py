from django.contrib.auth.models import User
from rest_framework import serializers
from news.models import Articles


class LoginSerializer(serializers.Serializer):
    username = serializers.CharField(max_length=25)
    password = serializers.CharField(max_length=32)


class RegistrationSerializer(LoginSerializer):
    email = serializers.EmailField()
    password_confirm = serializers.CharField(max_length=32)

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["username"]


class NewsSerializer(serializers.ModelSerializer):
    author = UserSerializer()
    class Meta:
        model = Articles
        fields = "__all__"

