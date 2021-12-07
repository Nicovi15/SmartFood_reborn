from django.contrib import admin
from .models import infosUtilisateur

# Register your models here.


class infosUtilisateurAdmin(admin.ModelAdmin):
    list_display = ('user_id','age', 'poids', 'taille', 'sexe', 'objectif')


# Register your models here.

admin.site.register(infosUtilisateur, infosUtilisateurAdmin)