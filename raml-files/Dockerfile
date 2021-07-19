FROM node:alpine
MAINTAINER Ernest Mueller <ernestmueller@theagileadmin.com>

WORKDIR /usr/app

RUN apk update && apk add yaml
RUN npm install -g npm@7.17.0
RUN npm install -g abao
RUN npm install --save-dev chai

COPY ./ ./

RUN mkdir -p /raml
VOLUME /raml
WORKDIR /raml

ENTRYPOINT ["abao"]
CMD ["--help"]
