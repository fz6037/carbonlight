from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from .models import Category, News, Contact, CalculationConstant
from rest_framework import serializers
from django.contrib.auth.models import User




class CategorySerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Category
        fields = ('id', 'type', 'carbon_calculator_type', 'photo_main', 'logo_main', 'description', 'ratio')



class NewsSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = News
        fields = ('id', 'title', 'photo_main', 'description', 'link', 'email')



class ContactSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Contact
        fields = ('id', 'photo_main', 'alias', 'service', 'description', 'email')

class CalculationConstantSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = CalculationConstant
        fields = ('id', 'type', 'cvc_value', 'plb_value', 'cfo_value', 'cfa_value' )

