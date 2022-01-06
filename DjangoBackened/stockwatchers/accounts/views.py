from rest_framework import generics, permissions
from rest_framework.response import Response
from .serializers import UserSerializer, RegisterSerializer
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.tokens import AccessToken

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