from django.db import models
from django.db.models.deletion import CASCADE

# Stock Model.
class Stock (models.Model):
  ticker = models.CharField(max_length=5, null=False, blank=False)
  user = models.CharField(max_length=25, null=False, blank=False)
  # watchlist_id = models.ForeignKey( , on_delete=models.CASCADE)