FROM ubuntu:16.04
MAINTAINER Ernest Mueller <ernestmueller@theagileadmin.com>

RUN apt-get update && apt-get install -y openssh-server curl jq vim
RUN mkdir /var/run/sshd
RUN echo 'root:theagileadmin' | chpasswd
RUN sed -i 's/PermitRootLogin prohibit-password/PermitRootLogin yes/' /etc/ssh/sshd_config

# SSH login fix. Otherwise user is kicked off after login
RUN sed 's@session\s*required\s*pam_loginuid.so@session optional pam_loginuid.so@g' -i /etc/pam.d/sshd

ENV NOTVISIBLE "in users profile"
RUN echo "export VISIBLE=now" >> /etc/profile

# Install chef-solo and the chef development kit
RUN curl -L https://www.opscode.com/chef/install.sh | bash
RUN wget https://packages.chef.io/files/stable/chefdk/1.5.0/ubuntu/16.04/chefdk_1.5.0-1_amd64.deb
RUN dpkg -i chefdk_1.5.0-1_amd64.deb
VOLUME        ["/chef-repo"]

# Expose SSH port
EXPOSE 22

# Expose port for our app
EXPOSE 8888

CMD ["/usr/sbin/sshd", "-D"]