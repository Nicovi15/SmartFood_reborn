from rest_framework import viewsets
from .serializers import RestaurantSerializer
from .serializers import ProduitSerializer
from .models import Restaurant
from .models import Produit


# Create your views here.


class RestaurantView(viewsets.ModelViewSet):
    serializer_class = RestaurantSerializer
    queryset = Restaurant.objects.all()


class ProduitView(viewsets.ModelViewSet):
    serializer_class = ProduitSerializer
    queryset = Produit.objects.all()


    def get_queryset(self):
        t = self.request.query_params.get('type')
        r = self.request.query_params.get('restaurant')

        queryset = Produit.objects.filter()

        if(t != None and r != None):
            queryset = Produit.objects.filter(type = t, restaurant=r)
        elif(t != None):
            queryset = Produit.objects.filter(type = t)
        elif(r != None):
            queryset = Produit.objects.filter(restaurant=r)

        return queryset
