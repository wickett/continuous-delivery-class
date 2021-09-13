FROM jenkins/jenkins:lts-jdk11
MAINTAINER Ernest Mueller <ernestmueller@theagileadmin.com>

USER root

RUN \
    apt-get update && \
    apt-get install -y build-essential && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

COPY docker /usr/bin/docker

USER jenkins

ENTRYPOINT ["/sbin/tini", "--", "/usr/local/bin/jenkins.sh"]
