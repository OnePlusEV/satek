from django.shortcuts import render
from django.contrib.auth import authenticate, login
from django.http import HttpResponse


def index(request):
    print('index/')
    return render(request, 'index.html')
