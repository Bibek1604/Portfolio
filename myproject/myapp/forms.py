from django import forms
from .models import Contact  # Import the Contact model from the same directory

class ContactForm(forms.ModelForm):
    class Meta:
        model = Contact
        fields = ['name', 'phone', 'email']