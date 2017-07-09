FROM node:alpine
MAINTAINER Ernest Mueller <ernestmueller@theagileadmin.com>

RUN apk update && apk add yaml
RUN npm install -g abao
RUN npm install --save-dev chai

RUN mkdir -p /raml
VOLUME /raml
WORKDIR /raml

ENTRYPOINT ["abao"]
CMD ["--help"]