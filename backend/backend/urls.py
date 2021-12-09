"""backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.conf.urls import url
from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from CalcBesoinNutri import views as view_calc_besoin_nutri
from CalcBesoinNutri import views as calc_views
from uberEatsAPI import views as uberEats_views
from setUserInfo import views as view_set_user
from backbone import views as backbone_views
from socialauth import views as auth_views

router = routers.DefaultRouter()
router.register(r'restaurants', uberEats_views.RestaurantView, 'restaurant')
router.register(r'produits', uberEats_views.ProduitView, 'produit')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('calculBesoinNutri/', view_calc_besoin_nutri.calcBesoinNutri, name='calc'),
    path('setUserInfo/', view_set_user.setUserInfo, name='setuser'),
    path('accounts/', include('allauth.urls')),
    path('socialauth/', auth_views.socialauth, name="oauth2"),
    path('uberEatAPI/', include(router.urls)),
    path('infoAliment/', backbone_views.infoAliment, name='infoAliment'),
    path('accounts/google/login/callback/', auth_views.google_get_access_token, name="succesLogin"),
]
