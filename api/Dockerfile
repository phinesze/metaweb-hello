FROM python:3.6.7
MAINTAINER phinesze <phinesze@gmail.com>
ENV PYTHONUNBUFFERED 1
WORKDIR /code/
ADD . /code/
RUN pip install -r requirements.txt
CMD /bin/sh -c "python manage.py runserver 0.0.0.0:8000"