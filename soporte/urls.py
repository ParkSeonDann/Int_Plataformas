from django.contrib import admin
from django.urls import path, include
from .views import *
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path('', principal, name="principal"),
    path('pruebapost.html/', pruebapost, name="pruebapost"),
    path('patch.html/', patch, name="patch"),
    path('admin/', admin.site.urls),
]

if settings.DEBUG == True:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
    urlpatterns += static(settings.MEDIA_URL, document_root = settings.MEDIA_ROOT)