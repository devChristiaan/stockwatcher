from rest_framework import status
from rest_framework import serializers
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.serializers import Serializer

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
  permissions_classes = [
    permissions.AllowAny
  ]
  serializer_class = StockSerializer
  
