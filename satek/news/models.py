from django.contrib.auth.models import User
from django.db import models


class Articles(models.Model):
    title = models.CharField('Заголовок наовсти', max_length=100)
    text = models.TextField('Текст новости')
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    pub_date = models.DateTimeField('Дата публикации')
    picture = models.ImageField('Картинка к новости', upload_to='images/')
