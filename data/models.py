from django.db import models
from django.contrib.auth.models import User
from datetime import datetime

class News(models.Model):

    category = models.ForeignKey('Category', on_delete=models.CASCADE, blank=True, null=True)
    title = models.CharField(max_length=100)
    photo_main = models.ImageField(upload_to='photos/%Y/%m/%d/', blank=True)
    description = models.TextField(blank=True)
    email = models.EmailField(max_length=50, blank=True, default='')
    link = models.CharField(max_length=100, blank=True, default='')

    def __str__(self):
        return self.title
        
class Contact(models.Model):

    category = models.ForeignKey('Category', on_delete=models.CASCADE, blank=True, null=True)
    photo_main = models.ImageField(upload_to='photos/%Y/%m/%d/', blank=True)
    alias = models.CharField(max_length=100)
    service = models.CharField(max_length=100)
    description = models.TextField(blank=True)
    email = models.EmailField(max_length=50, blank=True)

    def __str__(self):
        return self.alias

class Category(models.Model):

    CATEGORY_TYPE_CHOICES = (
        ('Nouvelles installations nucléaires et infrastructures énergétiques', 'Nouvelles installations nucléaires et infrastructures énergétiques'),        
        ('Infrastructures de transport', 'Infrastructures de transport'),        
        ('Défense et sécurité nationale', 'Défense et sécurité nationale'),
        ('Industrie de transformation','Industrie de transformation'),
        ('Industrie des procédés','Industrie des procédés'),
        ('Datacenter','Datacenter'),
        ('Retail et logistique','Retail et logistique'),
        ('Global Facility Management','Global Facility Management'),
        ('Solutions digitales','Solutions digitales'),
        ('Tertiaire','Tertiaire')
    )
    
    CALCULATOR_TYPE_CHOICES = (
        ('Calculette Nucléaire', 'Calculette Nucléaire'),        
        ('Calculette Datacenter', 'Calculette Datacenter'),  
        ('Calculette Retail et Logistique', 'Calculette Retail et Logistique'),
        ('Calculette Tertiaire', 'Calculette Tertiaire'),
    )

    type = models.CharField(choices=CATEGORY_TYPE_CHOICES, max_length=150, blank=True, default="")
    carbon_calculator_type = models.CharField(choices=CALCULATOR_TYPE_CHOICES, max_length=100, blank=True, default="")
    photo_main = models.ImageField(upload_to='photos/%Y/%m/%d/', blank=True)
    logo_main = models.ImageField(upload_to='logos/%Y/%m/%d/', blank=True)
    description = models.TextField(blank=True)
    ratio = models.DecimalField(max_digits=5, decimal_places=3)

    def __str__(self):
        return self.type

class CalculationConstant(models.Model):

    SECTOR_TYPE_CHOICES = (
        ('Bureaux', 'Bureaux'),        
        ('Hopital', 'Hopital'),
        ('Commerce', 'Commerce'),
        ('EHPAD', 'EHPAD'),        
        ('Hotel', 'Hotel'),
        ('Restauration', 'Restauration'),
        ('Accueil petite enfance', 'Accueil petite enfance'),        
        ('Gymnase', 'Gymnase'),
        ('Enseignement', 'Enseignement'),
    )

    type = models.CharField(choices=SECTOR_TYPE_CHOICES, max_length=150, blank=True, default="")
    cvc_value = models.IntegerField(blank=True, default=0)
    plb_value = models.IntegerField(blank=True, default=0)
    cfo_value = models.IntegerField(blank=True, default=0)
    cfa_value = models.IntegerField(blank=True, default=0)

    def __str__(self):
        return self.type