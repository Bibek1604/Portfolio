from django.urls import path
from .views import bibek

urlpatterns = [
    path('bibek/', bibek, name='bibek'),
]
