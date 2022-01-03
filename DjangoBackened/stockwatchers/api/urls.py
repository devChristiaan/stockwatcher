from rest_framework import routers

#View Imports
from .views import StockViewSet, WatchlistViewSet,  WatchlistStocksViewSet

router = routers.DefaultRouter()
router.register('stock', StockViewSet, basename="Stock")
router.register('watchlist', WatchlistViewSet, basename="Watchlist")
router.register('stocks/watchlist', WatchlistStocksViewSet, basename="Watchlist_Stocks")

urlpatterns = router.urls