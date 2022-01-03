from rest_framework import routers

#View Imports
from .views import StockViewSet, WatchlistViewSet,  WatchlistStocksViewSet

router = routers.DefaultRouter()
router.register('stock', StockViewSet, basename="Stock")

#GET METHOD
#<siteUrl/<apiVersion>/watchlist
router.register('watchlist', WatchlistViewSet, basename="Watchlist")

#GET METHOD
#<siteUrl/<apiVersion>/stocks/watchlist/?watchlist_id=<init:>>
router.register('stocks/watchlist', WatchlistStocksViewSet, basename="Watchlist_Stocks")

urlpatterns = router.urls