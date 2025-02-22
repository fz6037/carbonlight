
from django.contrib import admin
from django.urls import path, include
from django.conf.urls.static import static 
from django.conf import settings
from django.views.generic import TemplateView
import os

urlpatterns = [
    path('', include('frontend.urls')),
    path('admin/', admin.site.urls, name='admin'),
    path('api/v1/', include('data.urls')),
]
urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)