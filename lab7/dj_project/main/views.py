from django.shortcuts import render # type: ignore
from django.http import HttpResponse # type: ignore

def index(request):
    return HttpResponse("<h4>Works!</h4>")


def about(request):
    return HttpResponse("<h1>About</h1>")