from rest_framework import viewsets, permissions
#Model Imports
# from account.models import Account
from stock.models import Stock
from watchlist.models import Watchlist

#Serializer imports
from .serializer import StockSerializer
from .serializer import WatchlistSerializer

#Stock Data ViewSet
class StockViewSet(viewsets.ModelViewSet):
  queryset = Stock.objects.all()
  permission_classes = [
    permissions.AllowAny
  ]
  serializer_class = StockSerializer
  
class WatchlistViewSet(viewsets.ModelViewSet):
  queryset = Watchlist.objects.all()
  permission_classes = [
    permissions.AllowAny
  ]
  serializer_class = WatchlistSerializer