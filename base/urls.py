from django.urls import path
from .views import *


urlpatterns = [
    path('', lobby, name='lobby'),
    path('room/', room, name='room'),

    path('get_token/', getToken),
    path('create-member/', createMember),
    path('get-member/', getMember),
]