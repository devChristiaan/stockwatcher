from django.urls import path, include
from .views import RegistrationViewSet
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
  path('auth/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
  path('auth/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
  path('auth/register', RegistrationViewSet.as_view()),
  # path('auth/login', LoginViewSet.as_view()),
  # path('auth/user', UserViewSet.as_view()),
]