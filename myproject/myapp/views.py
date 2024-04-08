from django.shortcuts import render

def bibek(request):
    return render(request, 'index.html', {'name': 'bibek'})
