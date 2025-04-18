# Generated by Django 5.1.7 on 2025-03-29 10:56

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_remove_product_category_id_product_category'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='category',
            options={},
        ),
        migrations.AlterModelOptions(
            name='product',
            options={},
        ),
        migrations.AlterField(
            model_name='product',
            name='category',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.category'),
        ),
    ]
