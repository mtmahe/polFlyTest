import datetime
from django.db import models

from django.conf import settings
from django.utils.timezone import make_aware

def auto_now():
    # return datetime.datetime.now() - datetime.timedelta(days=1)
    naive_datetime = datetime.datetime.now()
    aware_datetime = make_aware(naive_datetime)

    return aware_datetime

class Post(models.Model):
    title = models.CharField(max_length=128)
    text = models.TextField(max_length=2048)
    posted_by = models.CharField(max_length=50, default="root")
    posted_at = models.DateTimeField(default=auto_now)
    edited_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title
