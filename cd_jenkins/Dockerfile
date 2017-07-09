FROM jenkins:latest
MAINTAINER Ernest Mueller <ernestmueller@theagileadmin.com>

USER root

RUN \
    apt-get update && \
    apt-get install -y build-essential && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

COPY docker /usr/bin/docker
RUN groupadd docker
RUN gpasswd -a jenkins docker

USER jenkins

ENTRYPOINT ["/bin/tini", "--", "/usr/local/bin/jenkins.sh"]