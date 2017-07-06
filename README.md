# Basic jenkins powered continuous delivery pipeline

## Prerequisites
Install Docker for Mac from https://docs.docker.com/docker-for-mac/install/

## To run everything

To run the whole set of tools, run

`docker-compose up --build -d`

and it should build and run the jenkins and nexus and test_fixture containers and hook them up together.
Jenkins will be available on localhost:8080 (user/pass admin/theagileadmin) and Nexus on localhost:8081 (user/pass admin/admin123).  You can ssh into the test_fixture container as root/theagileadmin.

## To run just the jenkins docker container

Build this container with

`docker image build --tag cd_jenkins .`

Then in the directory above jenkins_home:

`docker run -d -p 8080:8080 -p 50000:50000 -v $PWD/jenkins_home:/var/jenkins_home --name myjenkins cd_jenkins`

This will download the Jenkins docker container (https://hub.docker.com/_/jenkins/) and run it mounting $PWD/jenkins_home as its work directory.  

Go to http://localhost:8080 in your browser and use username admin password theagileadmin to get access.  A sample go build for word-cloud-generator will be already set up in there.

## Rolling Your Own Jenkins

You can make your own empty jenkins_home if you want to start from scratch.

The first time it performs setup - it'll give you a starter password, saying:

`"Jenkins initial setup is required. An admin user has been created and a password generated.
Please use the following password to proceed to installation:"`

Go to http://localhost:8080 in your browser to enter the password and perform default setup, including the recommended plugins.
Then add the Go plugin (https://wiki.jenkins-ci.org/display/JENKINS/Go+Plugin) from the Plugin Manager (http://localhost:8080/pluginManager/).  Also the Nexus Artifact Uploader plugin (https://wiki.jenkins-ci.org/display/JENKINS/Nexus+Artifact+Uploader).

Go to the Global Tool Configuration (http://localhost:8080/configureTools/) and go to the Go section and add a go installation.  Call it something with the version in it like
"go 1.8.3".

To restart jenkins, hit http://localhost:8080/safeRestart.  Or you can `docker stop myjenkins`.

## Nexus

We'll use nexus as our artifact repository just by using its stock docker image from https://hub.docker.com/r/sonatype/nexus3/

Just `docker run -d -p 8081:8081 -v $PWD/nexus_data:/nexus_data --name nexus sonatype/nexus3` and then go to http://localhost:8081 in your browser. Use the default creds of admin/admin123 to log in.

It makes a nexus_data directory mounted from the container for persistence.

Go to settings/Repositories, add a raw (hosted) one called word-cloud-generator.  Then a raw (group) containing it called cd_class.

## Turning it off

To stop all the containers, 

`docker-compose down`