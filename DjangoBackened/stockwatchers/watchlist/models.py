from django.db import models

# Create your models here.
class Watchlist (models.Model):
  name = models.CharField(max_length=25, null=False, blank=False)
  user = models.CharField(max_length=25, null=False, blank=False)