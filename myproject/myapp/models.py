from django.db import models

class Contact(models.Model):
    name = models.CharField(max_length=100)##NAME FIELD HERE
    email = models.EmailField()#EMAIL FILD HERE
    phone = models.CharField(max_length=15)  # Add the phone field here
    message = models.TextField() #MESSAGE FIELD HERE

    def __str__(self):
        return self.name
