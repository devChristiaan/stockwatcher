# Generated by Django 4.0.1 on 2022-02-19 17:44

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('watchlist', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='watchliststocks',
            name='watchlist_id',
            field=models.ForeignKey(blank=True, on_delete=django.db.models.deletion.CASCADE, to='watchlist.watchlist'),
        ),
    ]
