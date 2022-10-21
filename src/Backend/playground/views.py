from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.


def websiteResponse(request):
    return render(request, 'test.html')