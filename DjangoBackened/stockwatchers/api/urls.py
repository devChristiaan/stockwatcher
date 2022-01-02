from rest_framework import routers

#View Imports
# from api.views import watchlist_view
from api.views import StockViewSet

router = routers.DefaultRouter()
router.register('stock', StockViewSet, basename="Stock")

urlpatterns = router.urls