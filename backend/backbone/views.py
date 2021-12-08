from django.shortcuts import render
from rest_framework.decorators import api_view
from django.http import HttpResponse
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.utils import json
import requests
import json
# Create your views here.


@api_view(['POST'])
def infoAliment(request):

    aliment = request.data['aliment'] #en fr
    rep = []
    translation_url = "https://dev-api.itranslate.com/translation/v2/"
    bodyTrad = {
        "source": {"dialect": "fr", "text": aliment},
        "target": {"dialect": "en"}
    }
    response_traduction = requests.post(translation_url, json=bodyTrad, headers={'Authorization': 'Bearer ef7af2ab-370e-4146-bcc2-802971b93248'})

    if response_traduction.status_code == requests.codes.ok:
        print(response_traduction.text)
        rep = json.loads(response_traduction.text)
    else:
        print("Error:", response_traduction.status_code, response_traduction.text)
        return HttpResponse(response_traduction.text)

    aliment = rep["target"]["text"]


    #aliment il soit en anglais
    rep = []
    api_url = 'https://api.calorieninjas.com/v1/nutrition?query='
    query = aliment
    response = requests.get(api_url + query, headers={'X-Api-Key': 'pOm/uLM1kZmTVU8Y9yvb5w==5djrX0KbCkkcjMFs'})
    if response_traduction.status_code == requests.codes.ok:
        print(response.text)
        rep = json.loads(response.text)
    else:
        print("Error:", response.status_code, response.text)

    rep = json.dumps({
            'cal': rep["items"][0]["calories"]
        })

    return HttpResponse(rep)


@api_view(['POST'])
def fromRestoToMenu(request):

    calories = request.data['calories']
    numResto = request.data['restaurant']

    urlAPI_uberEat = "http://localhost:8000/uberEatAPI/produits/"
    type0 = "?type=0&restaurant=" + numResto
    type1 = "?type=1&restaurant=" + numResto
    type2 = "?type=2&restaurant=" + numResto
    type3 = "?type=3&restaurant=" + numResto

    response = requests.get(urlAPI_uberEat + type0)
    plat = json.loads(response.text)

    response = requests.get(urlAPI_uberEat + type1)
    accompagnement = json.loads(response.text)

    response = requests.get(urlAPI_uberEat + type2)
    dessert = json.loads(response.text)

    response = requests.get(urlAPI_uberEat + type3)
    boisson = json.loads(response.text)

    makeMenu_url = "http://localhost:8000/menuMaker/"
    bodyMakeMenu = {
        "cal": calories,
        "plat": plat,
        "accompagnement": accompagnement,
        "dessert": dessert,
        "boisson": boisson
    }

    response = requests.post(makeMenu_url, json=bodyMakeMenu)
    rep = json.loads(response.text)

    return HttpResponse(rep)


