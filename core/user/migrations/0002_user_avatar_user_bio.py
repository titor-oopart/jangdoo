# Generated by Django 4.0 on 2024-02-24 04:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core_user', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='avatar',
            field=models.ImageField(null=True, upload_to=''),
        ),
        migrations.AddField(
            model_name='user',
            name='bio',
            field=models.TextField(null=True),
        ),
    ]
