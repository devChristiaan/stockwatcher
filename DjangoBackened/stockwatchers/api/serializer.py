from rest_framework import serializers
from stock.models import Stock
from watchlist.models import Watchlist, WatchlistStocks

class StockSerializer(serializers.ModelSerializer):
  class Meta:
    model = Stock
    fields = ('ticker', 'user', 'watchlist', 'id')
    
class WatchlistSerializer(serializers.ModelSerializer):
  class Meta:
    model = Watchlist
    fields = ('name', 'user', "id")
    
class WatchlistStocksSerializer(serializers.ModelSerializer):
  class Meta:
    model = WatchlistStocks
    fields = ('user', 'watchlist_id', "ticker", 'id')