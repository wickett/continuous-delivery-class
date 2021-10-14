FROM ubuntu:20.04
MAINTAINER Ernest Mueller <ernestmueller@theagileadmin.com>

RUN apt update && apt install -y openssh-server curl jq vim
RUN mkdir /var/run/sshd
RUN echo 'root:theagileadmin' | chpasswd
RUN sed -ri 's/^#?PermitRootLogin\s+.*/PermitRootLogin yes/' /etc/ssh/sshd_config
RUN sed -ri 's/UsePAM yes/#UsePAM yes/g' /etc/ssh/sshd_config
RUN mkdir /root/.ssh

ENV NOTVISIBLE "in users profile"
RUN echo "export VISIBLE=now" >> /etc/profile

# Expose SSH port
EXPOSE 22

# Expose port for our app
EXPOSE 8888

CMD ["/usr/sbin/sshd", "-D"]
