# Generated by Django 3.1.4 on 2020-12-28 17:47

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('data', '0002_auto_20201228_1759'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='contact',
            name='type',
        ),
        migrations.RemoveField(
            model_name='news',
            name='type',
        ),
        migrations.AddField(
            model_name='contact',
            name='project',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='data.project'),
        ),
        migrations.AddField(
            model_name='news',
            name='project',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='data.project'),
        ),
    ]
