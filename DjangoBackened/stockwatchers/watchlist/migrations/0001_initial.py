# Generated by Django 4.0.1 on 2022-01-09 23:57

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='WatchlistStocks',
            fields=[
                ('ticker', models.CharField(max_length=5)),
                ('watchlist_id', models.IntegerField()),
                ('id', models.IntegerField(primary_key=True, serialize=False)),
                ('user', models.CharField(max_length=25)),
            ],
        ),
        migrations.CreateModel(
            name='Watchlist',
            fields=[
                ('name', models.CharField(max_length=25)),
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='owner', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
