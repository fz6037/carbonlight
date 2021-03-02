from django.contrib import admin
from import_export.admin import ImportExportModelAdmin
from .models import Category, News, Contact, CalculationConstant

class CategoryAdmin(ImportExportModelAdmin):
  list_display = ('type', 'carbon_calculator_type', 'photo_main', 'logo_main', 'description', 'ratio')
  list_display_links = ('type',)
  list_per_page = 25


class NewsAdmin(ImportExportModelAdmin):
  list_display = ('title', 'photo_main', 'description', 'link', 'email')
  list_display_links = ('title', )
  list_per_page = 25  


class ContactAdmin(ImportExportModelAdmin):
  list_display = ('photo_main', 'alias', 'service', 'description', 'email')
  list_display_links = ('alias', )
  list_per_page = 25 

class CalculationConstantsAdmin(ImportExportModelAdmin):
  list_display = ('type', 'cvc_value', 'plb_value', 'cfo_value', 'cfa_value' )
  list_display_links = ('type', )
  list_per_page = 25 


admin.site.register(Category, CategoryAdmin)
admin.site.register(News, NewsAdmin)
admin.site.register(Contact, ContactAdmin)
admin.site.register(CalculationConstant, CalculationConstantsAdmin)
