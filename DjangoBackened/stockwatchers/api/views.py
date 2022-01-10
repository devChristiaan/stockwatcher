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
  permission_classes = [
    permissions.AllowAny,
  ]
  
  def get_query(self):
    return self.request.user.user_stock.all()
  
  
  serializer_class = StockSerializer
  Response(serializer_class.data)
  
class WatchlistViewSet(viewsets.ModelViewSet):
  permission_classes = [
    permissions.IsAuthenticatedOrReadOnly,
  ]
  
  serializer_class = WatchlistSerializer
  
  def get_queryset(self):
      return Watchlist.objects.all()
      # return self.request.user.owner.all()
        
  def perform_create(self, serializer):
    print(self.request.user)
    serializer.save(user=self.request.user)

  Response(serializer_class.data)
  
class WatchlistStocksViewSet(viewsets.ModelViewSet):
  
  permission_classes = [
    permissions.AllowAny,
  ]
  queryset= Stock.objects.all()
  serializer_class = WatchlistStocksSerializer
  Response(serializer_class.data)