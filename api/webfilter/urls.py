from django.urls import path

from . import views

urlpatterns = [
    path('path/', views.hello),
    path('json/', views.json),
]
