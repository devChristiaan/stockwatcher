from rest_framework import viewsets, permissions
from rest_framework.response import Response

#Model Imports
# from account.models import Account
from stock.models import Stock
from watchlist.models import Watchlist

#Serializer imports
from .serializer import StockSerializer
from .serializer import WatchlistSerializer
from .serializer import WatchlistStocksSerializer

#Stock Data ViewSet
class StockViewSet(viewsets.ModelViewSet):
  queryset = Stock.objects.all()
  permission_classes = [
    permissions.AllowAny
  ]
  
  def get_query(self):
    return self.request.user.user_stock.all()
  
  serializer_class = StockSerializer
  Response(serializer_class.data)
  
class WatchlistViewSet(viewsets.ModelViewSet):
  queryset = Watchlist.objects.all()
  permission_classes = [
    permissions.AllowAny
  ]
  serializer_class = WatchlistSerializer
  Response(serializer_class.data)
  
class WatchlistStocksViewSet(viewsets.ModelViewSet):
  
  queryset= Stock.objects.all()
  permission_classes = [
    permissions.AllowAny
  ]
  serializer_class = WatchlistStocksSerializer
  Response(serializer_class.data)