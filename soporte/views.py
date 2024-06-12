from django.shortcuts import render
from django.http import HttpResponse

def principal(request):
    return render(request, 'index.html')

def post(request):
    return render(request, 'post.html')

def patch(request):
    return render(request, 'patch.html')

def delete(request):
    return render(request, 'delete.html')

def listar(request):
    return render(request, 'listar.html')

def login(request):
    return render(request, 'login.html')