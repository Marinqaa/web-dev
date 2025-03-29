from django.urls import path # type: ignore
from . import views

urlpatterns = [
    path('', views.index, name='index'),  # Example view
    path('about', views.about)
]