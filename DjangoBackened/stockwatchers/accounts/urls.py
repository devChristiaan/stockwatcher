from django.urls import path
from .views import RegistrationViewSet
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
  #Login/Obtain tokens
  path('auth/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
  #Refresh user token
  path('auth/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
  #Register User
  path('auth/register', RegistrationViewSet.as_view()),
]