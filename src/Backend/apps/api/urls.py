from django.urls import path
from . import views

urlpatterns = [
   path('qna/', views.give_answer_to_question)
]