from rest_framework_simplejwt.views import TokenRefreshView
from .views import CategoryList
from django.urls import path, include

urlpatterns = [
    path('category/', CategoryList.as_view(), name='category-list'),
]