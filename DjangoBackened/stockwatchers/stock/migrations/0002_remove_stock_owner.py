# Generated by Django 4.0.1 on 2022-01-06 01:10

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('stock', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='stock',
            name='owner',
        ),
    ]