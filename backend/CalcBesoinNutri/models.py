from django.db import models

# Create your models here.

class Profil(models.Model):
    age = models.IntegerField
    sexe = models.CharField(max_length=6)
    taille = models.DecimalField
    poids = models.DecimalField
