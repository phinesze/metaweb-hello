# Create your views here.
from django.http.response import HttpResponse, JsonResponse


def hello(request):
    return HttpResponse('Hello')


def json(request):
    return JsonResponse({
        'id': 0,
        'pass': "iiii",
        'request': request.GET.get('a')
    })
