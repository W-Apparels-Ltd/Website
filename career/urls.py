from django.urls import path

from . import views

urlpatterns = [
    path('job-applications/', views.JobApplicationCreateView.as_view()),
    path('job-applications/<int:pk>/', views.JobApplicationDetailView.as_view()),
    path('job-applications/list/', views.JobApplicationListView.as_view()),
    path('contact/', views.ContactCreateView.as_view()),
    path('contact/list/', views.ContactListView.as_view()),
    path('contact/<int:pk>/', views.ContactDetailView.as_view()),
]


