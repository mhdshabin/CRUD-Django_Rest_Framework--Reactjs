from rest_framework import serializers
from api_app.models import *

class PatientSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model=Patient
        fields=['patient_id','first_name','last_name','blood']
class DoctorSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model=Doctor
        fields=['doctor_name','catagory']
        