from django.urls import path
from myapp.views import bibek, contact

urlpatterns = [
    path('bibek/', bibek, name='bibek'),
    path('contact/', contact, name='contact'),
]