FROM ubuntu:18.04
ENV home /var/www
MAINTAINER phinesze <phinesze@gmail.com>
RUN apt-get update \
 && apt-get install -y \
        python3-pip \
        python3-dev
ADD . $home/
# api/requirements.txt から依存するパッケージのインストール
RUN cd $home \
 && pip3 install -r requirements.txt
WORKDIR $home
CMD /bin/sh -c "python3 manage.py runserver;"