# Generated by Django 3.1.4 on 2021-02-05 18:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('data', '0020_auto_20210205_1918'),
    ]

    operations = [
        migrations.AlterField(
            model_name='news',
            name='email',
            field=models.EmailField(blank=True, default='', max_length=50),
        ),
        migrations.AlterField(
            model_name='news',
            name='link',
            field=models.CharField(blank=True, default='', max_length=100),
        ),
    ]
