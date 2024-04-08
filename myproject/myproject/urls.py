from django.urls import path
from myapp.views import bibek


urlpatterns = [
    path('bibek/', bibek, name='bibek'),
]
