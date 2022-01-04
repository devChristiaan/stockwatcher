from django.urls import path, include
from .views import RegistrationViewSet, LoginViewSet
# from knox import views as knox_views

urlpatterns = [
  # path('auth/', include('knox.urls')),
  path('auth/register', RegistrationViewSet.as_view()),
  path('auth/login', LoginViewSet.as_view()),
]