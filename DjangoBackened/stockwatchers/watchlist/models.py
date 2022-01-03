from django.db import models

# Create your models here.
class Watchlist (models.Model):
  name = models.CharField(max_length=25, null=False, blank=False)
  user = models.CharField(max_length=25, null=False, blank=False)
  id = models.IntegerField(primary_key=True, null=False, blank=False)
class WatchlistStocks(models.Model):
  ticker = models.CharField(max_length=5, null=False, blank=False)
  watchlist_id = models.IntegerField(null=False, blank=False)
  id = models.IntegerField(primary_key=True, null=False, blank=False)
  user = models.CharField(max_length=25, null=False, blank=False)