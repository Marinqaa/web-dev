# api/ views.py
from django.http import JsonResponse, HttpResponse
from django.core import serializers
from .models import Company, Vacancy
from django.shortcuts import redirect


def home(request):
    return redirect('/api/') 
from django.http import JsonResponse

def api_root(request):
    return JsonResponse({
       "message": "Welcome to the API!",
        "endpoints": {
            "companies": "/api/companies/",
            "company details": "/api/companies/<int:id>/",
            "vacancies by company": "/api/companies/<int:id>/vacancies/",
            "vacancies": "/api/vacancies/",
            "vacancy details": "/api/vacancies/<int:id>/",
            "top vacancies": "/api/vacancies/top-ten/",
        }
    })
    

def get_companies(request):
    companies = Company.objects.all()
    companies_json = serializers.serialize('json', companies)
    return JsonResponse(companies_json, safe=False)

def get_company_by_id(request, id):
    company = Company.objects.get(id=id)
    company_json = serializers.serialize('json', [company])
    return JsonResponse(company_json, safe=False)

def get_vacancies_by_company(request, id):
    company = Company.objects.get(id=id)
    vacancies = Vacancy.objects.filter(company=company)
    vacancies_json = serializers.serialize('json', vacancies)
    return JsonResponse(vacancies_json, safe=False)

def get_vacancies(request):
    vacancies = Vacancy.objects.all()
    vacancies_json = serializers.serialize('json', vacancies)
    return JsonResponse(vacancies_json, safe=False)

def get_vacancy_by_id(request, id):
    vacancy = Vacancy.objects.get(id=id)
    vacancy_json = serializers.serialize('json', [vacancy])
    return JsonResponse(vacancy_json, safe=False)

def get_vacancies_top_ten(request):
    top_ten_vacancies = Vacancy.objects.order_by('-salary')[:10]
    vacancies_json = serializers.serialize('json', top_ten_vacancies)
    return JsonResponse(vacancies_json, safe=False)