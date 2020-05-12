FROM node:8.3.0-stretch
MAINTAINER Rolf Larsen

RUN git clone https://github.com/rhodiumlabs/node-mjpeg-proxy.git \
  && npm install express \
  && npm install mjpeg-proxy

ENV MJPEG_URL=""
ENV MJPEG_PORT="8081"

ADD index.js /

CMD nodejs index.js
