from django.shortcuts import render, redirect
from django.core import serializers
from rest_framework import status
from datetime import datetime

from .models import Category, News, Contact, CalculationConstant
from .serializers import  CategorySerializer, NewsSerializer, ContactSerializer, CalculationConstantSerializer

from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import permissions, status
from django.http import Http404, HttpResponse
from rest_framework.decorators import api_view, permission_classes

import json


class CategoryList(APIView):
    
    permission_classes = (permissions.AllowAny,)

    def get(self, request, *args, **kwargs):

        category_list_obj = Category.objects.all()
        category_list_serializer = CategorySerializer(category_list_obj, many=True)
        category_list = category_list_serializer.data 

        for category in category_list:

            news_list_obj = News.objects.filter(category=category['id'])
            news_list_serializer = NewsSerializer(news_list_obj, many=True)
            news_list = news_list_serializer.data
            category['news'] = news_list

            contact_list_obj = Contact.objects.filter(category=category['id'])
            contact_list_serializer = ContactSerializer(contact_list_obj, many=True)
            contact_list = contact_list_serializer.data
            category['contact'] = contact_list

            if category["type"]== "Tertiaire":
                constant_list_obj = CalculationConstant.objects.all()
                constant_list = CalculationConstantSerializer(constant_list_obj, many=True)
                category['constants'] = constant_list.data

        return Response(category_list)

