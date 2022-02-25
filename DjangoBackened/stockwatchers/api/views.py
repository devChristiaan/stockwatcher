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
# from .serializer import WatchlistStocksSerializer

#Stock Data ViewSet
class StockViewSet(viewsets.ModelViewSet):
  permission_classes = [
    permissions.IsAuthenticated,
  ]
  
  serializer_class = StockSerializer
  
  def get_queryset(self):
      user = self.request.user
      return Stock.objects.filter(user=user)
  
  def retrieve(self, request, *args, **kwargs):
    id = kwargs["pk"]
    watchlistStocks = Stock.objects.filter(watchlist=id)
    serializer = StockSerializer(watchlistStocks, many=True)
    return Response(serializer.data)
  
  def create(self, request, *args, **kwargs):
    data = request.data
    watchlist_obj = Watchlist.objects.get(id=data["watchlist"])
    newWatchlistStock = Stock.objects.create(ticker=data["ticker"], user=data["user"], watchlist=watchlist_obj)
    newWatchlistStock.save()
    serializer = StockSerializer(newWatchlistStock)
    return Response(serializer.data)
  
  def destroy(self, request, *args, **kwargs):
    watchlistStock = self.get_object()
    watchlistStock.delete()
    return Response({"message": "Stock deleted Successfully"})
  
  def put(self, request, *args, **kwargs):
    id = request.query_params["id"]
    data = request.data
    stock = Stock.objects.get(id=id)
    stock.ticker = data["ticker"]
    stock.save()
    serializer = StockSerializer(stock)
    return Response(serializer.data)
  
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
    return Response({"message": "Watchlist deleted Successfully"})
  
  def put(self, request, *args, **kwargs):
    id = request.query_params["id"]
    watchlist = Watchlist.objects.get(id=id)
    data = request.data
    watchlist.name = data["name"]
    watchlist.save()
    serializer = WatchlistSerializer(watchlist)
    return Response(serializer.data)
  
# class WatchlistStocksViewSet(viewsets.ModelViewSet):
  
#   permission_classes = [
#     permissions.AllowAny,
  
#   ]
#   serializer_class = WatchlistStocksSerializer
  
#   def get_queryset(self):
#       user = self.request.user
#       serializer = WatchlistStocks.objects.filter(user=user)
#       return Response(serializer.data)
  
#   def retrieve(self, request, *args, **kwargs):
#     id = kwargs["pk"]
#     watchlistStocks = WatchlistStocks.objects.filter(watchlist_id=id)
#     serializer = WatchlistStocksSerializer(watchlistStocks)
#     return Response(serializer.data)
  