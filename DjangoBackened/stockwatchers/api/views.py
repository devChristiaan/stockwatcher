from rest_framework import viewsets, permissions
from rest_framework.response import Response
from rest_framework import status

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
    permissions.IsAuthenticated,
  ]
  
  serializer_class = WatchlistSerializer
  
  def get_queryset(self):
      user = self.request.user
      return Watchlist.objects.filter(user=user)
        
  def perform_create(self, serializer):
    watchlist = serializer.save(user=self.request.user)
    return watchlist
  
  def destroy(self, request, *args, **kwargs):
    watchlist = self.get_object()
    watchlist.delete()
    return Response({"message": "Watchlist deleted"})
  
  def update(self, request, *args, **kwargs):
    watchlist = Watchlist.objects.get()
    data = request.data
    watchlist.name = data["name"]
    watchlist.user = data["user"]
    watchlist.save()
    serializer = WatchlistSerializer(watchlist)
    return Response(serializer.data)
  
class WatchlistStocksViewSet(viewsets.ModelViewSet):
  
  permission_classes = [
    permissions.AllowAny,
  ]
  queryset= Stock.objects.all()
  serializer_class = WatchlistStocksSerializer
  Response(serializer_class.data)