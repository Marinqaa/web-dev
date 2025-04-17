# api/ urls.py
from django.contrib import admin
from django.urls import path, re_path
from .views import *

urlpatterns = [
    path('', api_root, name = 'api_root'),
    path('companies/', get_companies),
    re_path(r'^companies/(\d+)/$', get_company_by_id),
    re_path(r'^companies/(\d+)/vacancies/$', get_vacancies_by_company),
    path('vacancies/', get_vacancies),
    re_path(r'^vacancies/(\d+)/$', get_vacancy_by_id),
    path('vacancies/top-ten/', get_vacancies_top_ten),  
]
