# Generated by Django 4.0.1 on 2022-01-06 00:59

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('watchlist', '__first__'),
    ]

    operations = [
        migrations.CreateModel(
            name='Stock',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('ticker', models.CharField(max_length=5)),
                ('user', models.CharField(max_length=25)),
                ('owner', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='user_stocks', to=settings.AUTH_USER_MODEL)),
                ('watchlist', models.ForeignKey(blank=True, on_delete=django.db.models.deletion.CASCADE, to='watchlist.watchlist')),
            ],
        ),
    ]