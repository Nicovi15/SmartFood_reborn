from django.db import models

# Create your models here.

class infosUtilisateur(models.Model):
    objects = models.Manager()
    user_id = models.IntegerField()
    age = models.IntegerField()
    poids = models.DecimalField(max_digits=5, decimal_places=2)
    taille = models.DecimalField(max_digits=5, decimal_places=2)
    sexe = models.CharField(max_length=10)
    objectif = models.CharField(max_length=1000)
