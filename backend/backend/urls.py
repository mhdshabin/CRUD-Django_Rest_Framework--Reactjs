
from django.contrib import admin
from django.urls import path,include
from rest_framework import routers
from api_app.views import PatientViewSet,DoctorViewSet


router=routers.DefaultRouter()
router.register(r'Patient',PatientViewSet)
router.register(r'Doctor',DoctorViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('',include(router.urls)),
]
