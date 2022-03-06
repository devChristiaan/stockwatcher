from rest_framework import routers

#View Imports
from .views import StockViewSet, WatchlistViewSet
from accounts.views import UserProfileViewSet

router = routers.DefaultRouter()

#GET METHOD
#<siteUrl/<apiVersion>/stock
router.register('watchliststocks', StockViewSet, basename="Stock")

#GET METHOD
#<siteUrl/<apiVersion>/watchlist
router.register('watchlist', WatchlistViewSet, basename="Watchlist")

#GET METHOD
#<siteUrl/<apiVersion>/watchlist
router.register('profile', UserProfileViewSet, basename="Profile")

#GET METHOD
#<siteUrl/<apiVersion>/stocks/watchlist/?watchlist_id=<init:>>
# router.register('stocks/watchlist', WatchlistStocksViewSet, basename="Watchlist_Stocks")

urlpatterns = router.urls