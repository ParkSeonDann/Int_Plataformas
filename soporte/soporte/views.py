from django.shortcuts import render

# Create your views here.
def principal(request):
    return render(request,'index.html')

def patch(request):
    return render(request,'patch.html')

def pruebapost(request):
    return render(request,'pruebapost.html')