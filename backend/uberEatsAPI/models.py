from django.db import models

TYPES = (
    (0, "Plat"),
    (1, "Accompagnement"),
    (2, "Dessert"),
    (3, "Boisson")
)

# Create your models here.

class Restaurant(models.Model):
    objects = models.Manager()

    nom = models.CharField(max_length=120)
    description = models.TextField()
    codePostal = models.CharField(max_length=5)
    logo = models.CharField(max_length=300)

    def __str__(self):
        return self.nom


class Produit(models.Model):
    objects = models.Manager()

    restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE)
    nom = models.CharField(max_length=120)
    description = models.TextField()
    type = models.IntegerField(choices=TYPES, default=0)
    prix = models.DecimalField(max_digits=5, decimal_places=2)
    cal = models.DecimalField(max_digits=5, decimal_places=2)
    image = models.CharField(max_length=300)
