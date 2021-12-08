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
    response_traduction = requests.post(translation_url, data=bodyTrad, headers={'Authorization': 'Bearer ef7af2ab-370e-4146-bcc2-802971b93248'})



    if response_traduction.status_code == requests.codes.ok:
        print(response_traduction.text)
        rep = json.loads(response_traduction.text)
    else:
        print("Error:", response_traduction.status_code, response_traduction.text)
        return HttpResponse(response_traduction.text)

    aliment =  rep["target"]["text"]


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
            'cal': rep["source"][0]["text"]
        })

    return HttpResponse(rep)