# Generated by Django 4.1.5 on 2023-01-25 16:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api_app', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Doctor',
            fields=[
                ('doctor_id', models.AutoField(primary_key=True, serialize=False)),
                ('doctor_name', models.CharField(max_length=50)),
                ('catagory', models.CharField(max_length=50)),
            ],
        ),
    ]
