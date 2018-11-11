from django.urls import path

from . import views

urlpatterns = [
    path('path/', views.hello),
    path('date/', views.date),
    path('time/', views.time)
]
