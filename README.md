# Basic jenkins powered continuous delivery pipeline

## Prerequisites
Install Docker for Mac from https://docs.docker.com/docker-for-mac/install/

## To run the jenkins docker container
mkdir jenkins_home
EMUELLER-MBP-AUS:home ernestmueller$ docker run -p 8080:8080 -p 50000:50000 -v $PWD/jenkins_home:/var/jenkins_home jenkins

This will download the Jenkins docker container (https://hub.docker.com/_/jenkins/) and run it mounting $PWD/jenkins_home as its work directory.  The first time it performs setup - it'll give you a starter password, saying:

"Jenkins initial setup is required. An admin user has been created and a password generated.
Please use the following password to proceed to installation:"

Go to http://localhost:8080 in your browser to enter the password and perform default setup, including the recommended plugins.
Then add the Go plugin (https://wiki.jenkins-ci.org/display/JENKINS/Go+Plugin) from the Plugin Manager (http://localhost:8080/pluginManager/).
Go to the Global Tool Configuration (http://localhost:8080/configureTools/)