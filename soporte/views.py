from django.shortcuts import render
from django.http import HttpResponse

def principal(request):
    return render(request, 'index.html')

def pruebapost(request):
    return render(request, 'pruebapost.html')

def patch(request):
    return render(request, 'patch.html')