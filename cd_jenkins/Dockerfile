FROM jenkins/jenkins:lts-jdk21
MAINTAINER Ernest Mueller <ernestmueller@theagileadmin.com>

USER root

RUN \
    apt-get update && \
    apt-get install -y build-essential && \
    apt-get install -y ansible && \
    apt-get install -y sshpass && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

USER jenkins

ENTRYPOINT ["/usr/bin/tini", "--", "/usr/local/bin/jenkins.sh"]
