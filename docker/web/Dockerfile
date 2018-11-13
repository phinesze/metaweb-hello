FROM ubuntu:18.04
MAINTAINER phinesze <phinesze@gmail.com>
RUN apt-get update \
 && apt-get install -y \
        git \
        nodejs \
        npm \
        python3
RUN git clone https://github.com/phinesze/metaweb-hello.git
RUN cd metaweb-hello \
 &&
WORKDIR /var/www
CMD /bin/sh -c "while true; do echo hello world; sleep 10; done"