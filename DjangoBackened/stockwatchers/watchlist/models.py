from django.db import models
from django.contrib.auth.models import User
from django.db.models.deletion import CASCADE
# Create your models here.
class Watchlist (models.Model):
  name = models.CharField(max_length=25, null=False, blank=False)
  user = models.CharField(max_length=25, null=False, blank=False)
  id = models.IntegerField(primary_key=True, null=False, blank=False)
  owner = models.ForeignKey(User, related_name="user_watchlists", on_delete=models.CASCADE)
class WatchlistStocks(models.Model):
  ticker = models.CharField(max_length=5, null=False, blank=False)
  watchlist_id = models.IntegerField(null=False, blank=False)
  id = models.IntegerField(primary_key=True, null=False, blank=False)
  user = models.CharField(max_length=25, null=False, blank=False)