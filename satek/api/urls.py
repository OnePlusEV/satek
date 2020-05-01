from django.urls import path

from .views import registration, login, news

urlpatterns = [
    path('registration/', registration),
    path('login/', login),
    path('news/', news)
]
