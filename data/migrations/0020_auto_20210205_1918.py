# Generated by Django 3.1.4 on 2021-02-05 18:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('data', '0019_auto_20210205_1911'),
    ]

    operations = [
        migrations.AlterField(
            model_name='news',
            name='link',
            field=models.CharField(max_length=100, null=True),
        ),
    ]
