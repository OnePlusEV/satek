from django.shortcuts import render
from django.contrib.auth import authenticate, login
from django.http import HttpResponse


def index(request):
    print('news/index/')
    return render(request, 'news/news.html')
