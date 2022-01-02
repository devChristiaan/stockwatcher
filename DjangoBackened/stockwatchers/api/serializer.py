from django.db.models import fields
from rest_framework import serializers
from stock.models import Stock
from watchlist.models import Watchlist

class StockSerializer(serializers.ModelSerializer):
  class Meta:
    model = Stock
    fields = ('ticker', 'user', 'watchlist')
    
class WatchlistSerializer(serializers.ModelSerializer):
  class Meta:
    model = Watchlist
    fields = ('name', 'user', 'id')