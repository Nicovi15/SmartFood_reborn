# Generated by Django 3.2.9 on 2021-12-07 16:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('uberEatsAPI', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='produit',
            name='type',
            field=models.IntegerField(choices=[(0, 'Plat'), (1, 'Accompagnement'), (2, 'Dessert'), (3, 'Boisson')], default=0),
        ),
    ]
