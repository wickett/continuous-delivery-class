FROM ruby:2.3.0

WORKDIR /usr/src/app/
RUN gem install capistrano --version=3.4.0 &&\
    gem install capistrano_scm_nexus

COPY ./config /usr/src/app/config
COPY ./Capfile /usr/src/app/Capfile

# Add deploy script
COPY ./deploy.sh /usr/bin/deploy

CMD ["cap"]