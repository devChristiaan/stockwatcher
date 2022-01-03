from django.db import models
from django.db.models.deletion import CASCADE
from watchlist.models import Watchlist
from django.contrib.auth.models import User

# Stock Model.
class Stock (models.Model):
  ticker = models.CharField(max_length=5, null=False, blank=False)
  user = models.CharField(max_length=25, null=False, blank=False)
  watchlist = models.ForeignKey(Watchlist, on_delete=models.CASCADE, blank=True)
  owner = models.ForeignKey(User, related_name="user_stocks", on_delete=models.CASCADE)