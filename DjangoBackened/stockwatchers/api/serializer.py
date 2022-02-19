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
    fields = ('name', "id")
    
# class WatchlistStocksSerializer(serializers.ModelSerializer):
#   class Meta:
#     model = WatchlistStocks
#     fields = ('user', 'watchlist_id', "ticker")