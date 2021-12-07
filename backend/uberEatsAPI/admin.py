from django.contrib import admin
from .models import Restaurant
from .models import Produit


class RestaurantAdmin(admin.ModelAdmin):
    list_display = ('nom', 'description', 'codePostal', 'logo')


class ProduitAdmin(admin.ModelAdmin):
    list_display = ('restaurant', 'nom', 'description', 'type', 'prix', 'cal', 'image')


# Register your models here.

admin.site.register(Restaurant, RestaurantAdmin)
admin.site.register(Produit, ProduitAdmin)
