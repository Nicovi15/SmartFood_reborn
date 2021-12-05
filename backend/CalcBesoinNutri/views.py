from django.http import HttpResponse
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.utils import json


@api_view(['POST'])
def calcBesoinNutri(request):

    sexe = request.data['sexe']
    age = float(request.data['age'])
    taille = float(request.data['taille'])
    poids = float(request.data['poids'])
    cal = 0

    if (sexe == "homme"):
        cal = (13.7516 * poids) + (500.33 * taille) - (6.7550 * age) + 66.479
    elif(sexe == "femme"):
        cal = (9.740 * poids) + (184.96 * taille) - (4.6756 * age) + 655.0955

    response = json.dumps({
            'cal': cal
        })

    return HttpResponse(response)
