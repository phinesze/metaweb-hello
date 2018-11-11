# Create your views here.
from django.http.response import HttpResponse, JsonResponse
from datetime import datetime

def hello(request):
    return HttpResponse('Hello')

def date(request):
    """
    現在の年月日をjsonで返却する。
    :param request:
    :return:
    """

    now = datetime.now()

    response = JsonResponse({
        'year': now.year,
        'month': now.month,
        'day': now.day
    })

    # response['Access-Control-Allow-Origin'] = '*'
    return response

def time(request):
    """
    現在の時刻をjsonで返却する。
    :param request: 
    :return: 
    """

    now = datetime.now()

    return JsonResponse({
        'hour': now.hour,
        'minute': now.minute,
        'second': now.second
    })