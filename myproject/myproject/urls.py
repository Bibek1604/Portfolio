from django.contrib import admin
from django.urls import path
from myapp.views import bibek, contact

urlpatterns = [
    path('admin/', admin.site.urls),  # Include the admin URLs
    path('', bibek, name='bibek'),
    # path('contact/', contact, name='contact'),
]
