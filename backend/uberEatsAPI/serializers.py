from rest_framework import serializers
from .models import Restaurant
from .models import Produit


class RestaurantSerializer(serializers.ModelSerializer):
    class Meta:
        model = Restaurant
        fields = ('id', 'nom', 'description', 'codePostal', 'logo')


class ProduitSerializer(serializers.ModelSerializer):
    class Meta:
        model = Produit
        fields = ('id', 'restaurant', 'nom', 'description', 'type', 'prix', 'cal', 'image')
