from django.http import HttpResponse
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.utils import json
from .models import infosUtilisateur
# Create your views here.

@api_view(['GET'])
def getCaloriesInfo(request):
    sugar = request.data['sugar_g']
    fiber = request.data['sugar_g']
    serving_size = request.data['serving_size_g']
    sodium = request.data['sugar_g']
    name = request.data['name']
    potassium = request.data['potassium_mg']
    fat_saturated = request.data['fat_saturated_g']
    fat_total = request.data['fat_total_g']
    calories = request.data['calories']
    cholesterol = request.data['cholesterol_mg']
    protein = request.data['protein_g']
    carbohydrates_total = request.data['carbohydrates_total_g']
    response = json.dumps({
        'reponse': 'données récupérées'
    })
    return HttpResponse(response)