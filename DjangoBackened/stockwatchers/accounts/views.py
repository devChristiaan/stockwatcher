from rest_framework import generics, permissions
from rest_framework.response import Response
from .serializers import UserSerializer, RegisterSerializer
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.tokens import AccessToken
from rest_framework_simplejwt.views import TokenObtainPairView

from django.contrib.auth.models import User
from rest_framework import viewsets

# Register API
class RegistrationViewSet(generics.GenericAPIView):
  
  permission_classes = [
    permissions.AllowAny,
  ]
  
  serializer_class = RegisterSerializer
  
  def post(self, request, *args, **kwargs):
    serializer = self.get_serializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    user = serializer.save()
    tokenr = TokenObtainPairSerializer().get_token(user)  
    tokena = AccessToken().for_user(request.user)
    return Response({
      'user': UserSerializer(user, context=self.get_serializer_context()).data,
      'token': {'access': str(tokena), 'refresh': str(tokenr)}
    })
    
class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        token['username'] = user.username
        # ...

        return token

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer
    
class UserProfileViewSet(viewsets.ModelViewSet):
  permission_classes = [
    permissions.IsAuthenticated,
  ]
  serializer_class = UserSerializer
  
  def get_queryset(self):
    id = self.kwargs['pk']
    return User.objects.filter(id=id)