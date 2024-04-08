from django.shortcuts import render
from myapp.forms import ContactForm
from django.shortcuts import render
from django.http import HttpResponse

def bibek(request):
    return render(request,"index.html")

def contact(request):
    return HttpResponse("this is contact page")

def contact(request):
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            # Process the form data
            name = form.cleaned_data['name']
            email = form.cleaned_data['email']
            message = form.cleaned_data['message']
            # Now you can do something with the form data, such as saving it to the database
            # Assuming you have a Contact model
            # Contact.objects.create(name=name, email=email, message=message)
            # Redirect to a success page or do something else
            return render(request, 'contact_success.html')
    else:
        form = ContactForm()
    return render(request, 'contact.html', {'form': form})
