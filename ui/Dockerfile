FROM ubuntu:18.04
MAINTAINER phinesze <phinesze@gmail.com>
RUN apt-get update \
 && apt-get install -y \
        git \
        nodejs \
        npm \
        nginx
ADD dist /var/www/html/
CMD /bin/sh -c "nginx; while true; do echo metaweb-hello_ui; sleep 60000; done"