from django.http import HttpResponse
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.utils import json
from .models import infosUtilisateur
# Create your views here.

@api_view(['POST'])
def setUserInfo(request):


    u_id = request.user.id
    a = request.data['age']
    p = float(request.data['poids'])
    t = float(request.data['taille'])
    sex = request.data['sexe']
    obj = request.data['objectif']


    infosUtilisateur.objects.create(user_id=u_id,age=a,poids=p,taille=t,sexe=sex,objectif=obj)

    response = json.dumps({
            'reponse':'insertion en bdd effectée'
        })

    return HttpResponse(response)
