from django.conf import settings
from django.shortcuts import redirect, render
import os

def index(request):

    return render(request, 'frontend/index.html')