from django import forms
from myapp.models import Contact

class ContactForm(forms.ModelForm):
    class Meta:
        model = Contact
        fields = ['name', 'email', 'message']  # Remove 'phone' from the list of fields
