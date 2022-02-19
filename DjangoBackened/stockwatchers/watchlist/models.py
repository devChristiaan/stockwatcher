from django.db import models
from django.contrib.auth.models import User
from django.db.models.deletion import CASCADE
# Create your models here.
class Watchlist (models.Model):
  name = models.CharField(max_length=25, null=False, blank=False)
  
  user = models.ForeignKey(User, related_name="owner", null=False, on_delete=models.CASCADE)
  
  id = models.AutoField(primary_key=True, null=False, blank=False)