# Basic Continuous Delivery Pipeline
This course covers a wide range of topics from version control with git to CI with Jenkins to testing tools like robot, abao and gauntlt. Some of our environment runs in docker and some on the local machine to simulate development. For each video, we have included some setup instructions and dependencies needed.  The instructions below assume a Mac, however finding a Windows equivalent is often possible.

## Prerequisites
Install Docker from https://www.docker.com/

## Version Control in Action with git
* Install homebrew from https://brew.sh
* Install go via `brew install go`
* Install go via `brew install vim`
* Install go via `brew install git`
* Set $GOPATH `export GOPATH="${HOME}/go"` in `~/.bash_profile`
* Set $PATH `export PATH=$PATH:$(go env GOPATH)/bin` in `~/.bash_profile`
* Install godep: `go get github.com/tools/godep`
* Install golint: `go get -u github.com/golang/lint/golint`
* Install goconvey: `go get github.com/smartystreets/goconvey`
* Install rice: `go get github.com/GeertJohan/go.rice/rice`
* Optional, if you are interested in using vim like I do in the video, check out https://github.com/wickett/wickett-vim

This video assumes you setup a github account and added appropriate keys.  
When you do the git clone of https://github.com/wickett/word-cloud-generator it is important to put that in $GOPATH/src/github.com/wickett/word-cloud-generator

## CI in Action with Jenkins And Following

You will want to run this for all the labs that use the actual build pipeline.

### To run jenkins, nexus, and the test fixture containers

Run

`docker-compose up --build -d`

and it will build and run the jenkins and nexus and test_fixture containers and hook them up together.
Jenkins will be available on localhost:8080 (user/pass admin/theagileadmin) and Nexus on localhost:8081 (user/pass admin/admin123).  

Run a build of word-cloud-generator in jenkins and watch it build, unit test, package, and show up in nexus in cd_class/word-cloud-generator.

### Turning it all off
To stop all the containers and delete them and the volumes, 

`docker-compose down -v`

## Unit Testing in Action
* Install homebrew from https://brew.sh
* Install go via `brew install go`
* Install go via `brew install vim`
* Install go via `brew install git`
* Set $GOPATH `export GOPATH="${HOME}/go"` in `~/.bash_profile`
* Set $PATH `export PATH=$PATH:$(go env GOPATH)/bin` in `~/.bash_profile`
* Install godep: `go get github.com/tools/godep`
* Install golint: `go get -u github.com/golang/lint/golint`
* Install goconvey: `go get github.com/smartystreets/goconvey`
* Install rice: `go get github.com/GeertJohan/go.rice/rice`
* Optional, if you are interested in using vim like I do in the video, check out https://github.com/wickett/wickett-vim

## Deployment in Action with Chef
### To deploy 

With the provided test fixture, update word-cloud-generator.json to have whatever version number you want to deploy, and then run

`ssh root@localhost "cd /chef-repo; chef-solo -c solo.rb -j word-cloud-generator.json"`

with the password `theagileadmin` to ssh into the fixture and run the chef recipe to pull the version of the app specified in word-cloud-generator.json from nexus and install and run it. It should respond to a curl now.

## Integration Testing in Action with abao
### To run integration testing with abao and RAML

To build the abao test container, cd to ./raml-files and 

```docker build -t abao:latest .```

To run it with just the RAML, run 

```docker run -v ${PWD}:/raml --net="host" --rm abao wordcloud.raml --server http://localhost:8888```

To run it with a hookfile, run 

```docker run -v ${PWD}:/raml --net="host" --rm abao wordcloud.raml --hookfiles wordcloudhook.js```

## UI Testing in Action with Robot

### Prerequisites

Install python (brew install python) and Google Chrome.
The included venv may or may not work - you can create your own by removing the venv directory and then
```
pip install virtualenv
sudo /usr/bin/easy_install virtualenv
cd robot-tests
virtualenv venv
source ./venv/bin/activate
pip install robotframework
pip install robotframework-selenium2library
pip install chromedriver-installer
deactivate
```

### To run UI testing with Robot Framework and Selenium

Then you just

```
cd /robot-tests
source venv/bin/activate
robot .
```
And your browser will pop up and run the tests!  Just type "deactivate" to exit the virtualenv.

## Security Testing in Action with gauntlt
* Install homebrew from https://brew.sh
* Install Docker for Mac from https://docs.docker.com/docker-for-mac/install/
* Install node and npm with `brew install node`
* Install wget `brew install wget`
* Add `127.0.0.1 wordcloud` to `/etc/hosts`

# Advanced Topics

## Problems with running docker commands from inside jenkins docker container

If some of your stages die with
```
Got permission denied while trying to connect to the Docker daemon socket at unix:///var/run/docker.sock: Get http://%2Fvar%2Frun%2Fdocker.sock/v1.30/containers/json?all=1: dial unix /var/run/docker.sock: connect: permission denied.  

```
We're using the technique in http://jpetazzo.github.io/2015/09/03/do-not-use-docker-in-docker-for-ci/ to run other docker containers from our Jenkins container.
Unfortunately this is an area where there's not a consistent solution across platforms.  The container needs to be able to read/write /var/run/docker.sock to run docker commands. 
On the Mac, that is symlinked to a file that is usually owned by group "staff", so adding the jenkins user to "staff" in the dockerfile does the trick.
On other systems, you may need to see what the host thinks /var/run/docker.sock's permissions are and modify the container to fit.

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

## Running just Nexus

We'll use nexus as our artifact repository just by using its stock docker image from https://hub.docker.com/r/sonatype/nexus3/

Just `docker run -d -p 8081:8081 -v $PWD/nexus_data:/nexus_data --name nexus sonatype/nexus3` and then go to http://localhost:8081 in your browser. Use the default creds of admin/admin123 to log in.

It makes a nexus_data directory mounted from the container for persistence.

Go to settings/Repositories, add a raw (hosted) one called word-cloud-generator.  Then a raw (group) containing it called cd_class.

## Preparing the Test Fixture

The steps I used to set up this test fixture, for the curious:
```
curl -L https://www.opscode.com/chef/install.sh | bash
chef-solo -v
wget http://github.com/opscode/chef-repo/tarball/master
tar -zxf master
mv chef-boneyard-chef* chef-repo
cd chef-repo
mkdir .chef
echo "cookbook_path [ '/chef-repo/cookbooks' ]" > .chef/knife.rb
wget https://packages.chef.io/files/stable/chefdk/1.5.0/ubuntu/16.04/chefdk_1.5.0-1_amd64.deb
dpkg -i chefdk_1.5.0-1_amd64.deb
chef generate cookbook word-cloud-generator (put in cookbooks)
knife cookbook site download poise (gunzip and put in cookbooks)
knife cookbook site download poise-service (gunzip and put in cookbooks)
```





