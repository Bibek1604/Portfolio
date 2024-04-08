from django.shortcuts import render, redirect
from .forms import ContactForm  # Import ContactForm from the same directory

def bibek(request):
    return render(request, 'index.html', {'name': 'bibek'})

def contact(request):
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('success')  # Redirect to a success page
    else:
        form = ContactForm()
    return render(request, 'contact.html', {'form': form})