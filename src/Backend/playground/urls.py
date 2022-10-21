from django.urls import path
from . import views

urlpatterns = [
    path('websiteTest/', views.websiteResponse)
]