from django.contrib import admin
from django.urls import path, include
from .views import *
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path('', principal, name="principal"),
    path('login/', login, name="login"),
    path('agregar/', post, name="post"),
    path('modificar/', patch, name="patch"),
    path('listar/', listar, name="listar"),
    path('eliminar/', delete, name="delete"),
    path('admin/', admin.site.urls),
]

if settings.DEBUG == True:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
    urlpatterns += static(settings.MEDIA_URL, document_root = settings.MEDIA_ROOT)