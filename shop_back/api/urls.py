# api/urls.py
from django.contrib import admin
from django.urls import path, re_path
from .views import *

urlpatterns = [
     path('', api_root, name='api_root'),
    path('products/', get_products, name='get_products'),
    path('products/<int:id>/', get_products_by_id, name='get_product_by_id'),
    path('categories/', get_categories, name='get_categories'),
    path('categories/<int:id>/', get_category_by_id, name='get_category_by_id'),
    path('categories/<int:id>/products/', get_products_by_category, name='get_products_by_category'),
]