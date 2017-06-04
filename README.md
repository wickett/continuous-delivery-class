# Basic jenkins powered continuous delivery pipeline

## Prerequisites
Install Docker for Mac from https://docs.docker.com/docker-for-mac/install/

## To run the jenkins docker container

Build this container with

`docker image build --tag cd_jenkins .`

Then in the directory above jenkins_home:

`docker run -d -p 8080:8080 -p 50000:50000 -v $PWD/jenkins_home:/var/jenkins_home --name myjenkins cd_jenkins`

This will download the Jenkins docker container (https://hub.docker.com/_/jenkins/) and run it mounting $PWD/jenkins_home as its work directory.  

Go to http://localhost:8080 in your browser and use username admin password theagileadmin to get access.  A sample go build for word-cloud-generator will be already set up in there.

## Rolling Your Own
You can make your own empty jenkins_home if you want to start from scratch.

The first time it performs setup - it'll give you a starter password, saying:

`"Jenkins initial setup is required. An admin user has been created and a password generated.
Please use the following password to proceed to installation:"`

Go to http://localhost:8080 in your browser to enter the password and perform default setup, including the recommended plugins.
Then add the Go plugin (https://wiki.jenkins-ci.org/display/JENKINS/Go+Plugin) from the Plugin Manager (http://localhost:8080/pluginManager/).
Go to the Global Tool Configuration (http://localhost:8080/configureTools/)

To restart jenkins, hit http://localhost:8080/safeRestart.  Or you can `docker stop myjenkins`.