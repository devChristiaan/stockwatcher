from rest_framework import routers

#View Imports
# from api.views import watchlist_view
from .views import StockViewSet
from .views import WatchlistViewSet

router = routers.DefaultRouter()
router.register('stock', StockViewSet, basename="Stock")
router.register('watchlist', WatchlistViewSet, basename="Watchlist")

urlpatterns = router.urls