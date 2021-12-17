# Basic Continuous Delivery Pipeline

This course covers a wide range of topics from version control with git to CI with Jenkins to testing tools. Some of our environment runs in docker and some on the local machine to simulate development. For each video, we have included some setup instructions and dependencies needed.  The instructions below assume a Mac, however finding a Windows equivalent is often possible. The goal of the course is not to teach you everything about how to set up these tools, the lab is intended to illustrate the core continuous delivery principles with tangible working code.

These course materials are also available at https://github.com/wickett/continuous-delivery-class, feel free and contribute fixes there.

The sample app used throughout the course is NOT included in these files or repo. The application is available at https://github.com/wickett/word-cloud-generator

## Getting Started

For each of the videos in the class that have hands-on working with the code, we have included instructions on how to get it working on your machine. Of course, over time, these instructions might become outdated (we do accept pull requests!), but the goal of the class is to give you examples of how it could work for your organization in a descriptive way, not a prescriptive way.  

As you go through each video segment, you can follow along on your own if you follow these prerequisites. 

## Prerequisites

Install Docker Desktop from https://www.docker.com/
You will need to allocate at least 4 GB of RAM to Docker to run all these containers (Preferences... Resources). More is better.

## Using Windows?
If you are using Windows, please install the Windows Subsystem for Linux (https://docs.microsoft.com/en-us/windows/wsl/install) and you should be able to follow along with the class.

## Version Control in Action with git
* Install homebrew from https://brew.sh
* Install go via `brew install go`
* Install vim via `brew install vim`
* Install git via `brew install git`
* Set $GOPATH `export GOPATH="${HOME}/go"` in `~/.bash_profile`
* Set $PATH `export PATH=$PATH:$(go env GOPATH)/bin` in `~/.bash_profile`
* Install goconvey: `go get github.com/smartystreets/goconvey`
* Optionally, if you are interested in using vim like I do in the video, check out https://github.com/wickett/wickett-vim

This video assumes you setup a github account and added appropriate keys.
When you do the git clone of https://github.com/wickett/word-cloud-generator it is important to put that in $GOPATH/src/github.com/wickett/word-cloud-generator

## Continuous Integration in Action And Artifacts In Action

These commands will help you with all the labs that use the actual build pipeline.

### To run it all - jenkins, nexus, and the test fixture containers together

First, make sure you have Docker running.

Then, run the following docker-compose command in the course directory (in the same directory as the docker-compose.yml file, which it uses):

`docker-compose up --build -d`

and it will build and run the jenkins and nexus and test_fixture containers and hook them up together.

Jenkins will be available on localhost:8080 (user/pass admin/theagileadmin) and Nexus on localhost:8081 (user/pass admin/theagileadmin).
You can view details with:

`docker-compose ps`

Now you can log into Jenkins, run a build of word-cloud-generator in jenkins and watch it build, unit test, package, and show up in nexus at cd_class/word-cloud-generator.

If you need to enter one of the containers to poke around on the command line to debug, get the container name from docker-compose ps and then:

`docker exec -it <mycontainer> bash`

### Turning it all off

To stop all the containers and delete them and the volumes, again in the top of the course directory run:

`docker-compose down -v`

When you are done with the course, or if you just want to clean everything off including docker images you've built and volumes and other things Docker makes behind the scenes, instead run

`docker-compose down -v --rmi all --remove-orphans`
and then
`docker system prune --all --volumes`

Warning, doing the docker system prune will get rid of all stopped containers, unused networks, dangling images, build cache, and unassigned volumes on your box. Be more surgical if you have other docker work you don't want to interfere with. 

## Unit Testing in Action
* Install homebrew from https://brew.sh
* Install go via `brew install go`
* Install go via `brew install vim`
* Install go via `brew install git`
* Set $GOPATH `export GOPATH="${HOME}/go"` in `~/.bash_profile`
* Set $PATH `export PATH=$PATH:$(go env GOPATH)/bin` in `~/.bash_profile`
* Install goconvey: `go get github.com/smartystreets/goconvey`
* Optional, if you are interested in using vim like I do in the video, check out https://github.com/wickett/wickett-vim

## Deployment in Action
### To look inside the test fixture

Unusually for a docker container, we've put ssh on the test fixture container so it better simulates a running deployment target.  When the docker compose stack is running, you can log into it with:

`ssh root@localhost`

with the password `theagileadmin`.

## UI Testing in Action with Robot

### Prerequisites

Install python3 (`brew install python3` on the Mac) and Google Chrome.


To activate the included virtual environment, from the course files directory:
```
cd robot_tests
source venv/bin/activate
```

Run `robot --version` to ensure it's working.

Then you have to install the right chrome driver for your system, which you can do with the inncluded webdrivermanager:

```
cd venv/bin
webdrivermanager chrome -d chrome -l . 
```

Run `chromedriver --version` to ensure it's working.

### To run UI tests with Robot Framework and Selenium in Chrome

Then you can run the robot tests back from the top of the robot-tests directory with
```
cd ../..
robot .
```

and your Chrome browser should pop up and run the tests!  Just run `deactivate` to exit the python virtual environment when you're done. Logs and errors will appear in the robot-tests directory.

The included venv should work, but if it doesn't you can create one yourself by doing:
```
rm -rf venv
brew upgrade python3
python3 -m venv venv
source venv/bin/activate
cd venv/bin
pip install robotframework
pip install --upgrade robotframework-seleniumlibrary
pip install webdrivermanager
webdrivermanager chrome -d chrome -l .
deactivate
```

## Security Testing in Action with gauntlt
* Install homebrew from https://brew.sh
* Install Docker for Mac from https://docs.docker.com/docker-for-mac/install/
* Install node and npm with `brew install node`
* Install wget `brew install wget`

# Advanced Topics

## Rolling Your Own Jenkins

You can make your own empty jenkins_home if you want to start from scratch.

The first time it performs setup - it'll give you a starter password, saying:

`"Jenkins initial setup is required. An admin user has been created and a password generated.
Please use the following password to proceed to installation:"`

Go to http://localhost:8080 in your browser to enter the password and perform default setup, including the recommended plugins.
Then add the Go plugin (https://wiki.jenkins-ci.org/display/JENKINS/Go+Plugin) from the Plugin Manager (http://localhost:8080/pluginManager/).  Also the Nexus Artifact Uploader plugin (https://wiki.jenkins-ci.org/display/JENKINS/Nexus+Artifact+Uploader) and the Ansible plugin.  You will need to configure credentials, ssh for the test fixture and user/pass for Nexus, if you're using them.

Go to the Global Tool Configuration (http://localhost:8080/configureTools/) and go to the Go section and add a go installation.  Call it something with the version in it like
"go <version>".

To restart jenkins, hit http://localhost:8080/safeRestart. 

## Running just Nexus

We'll use nexus as our artifact repository just by using its stock docker image from https://hub.docker.com/r/sonatype/nexus3/

Just `docker run -d -p 8081:8081 -v $PWD/nexus-data:/nexus-data --name nexus sonatype/nexus3` and then go to http://localhost:8081 in your browser. Use the default creds of admin/admin123 to log in.

It makes a nexus-data directory mounted from the container for persistence.

Go to settings/Repositories, add a raw (hosted) one called word-cloud-generator.  Then a raw (group) containing it called cd_class.

## References
* Git Documentation - https://git-scm.com/doc
* Docker Desktop - https://www.docker.com/products/docker-desktop
* Docker Docs - https://docs.docker.com/reference/
* Docker Compose Overview - https://docs.docker.com/compose/
* Cleaning Up Docker - https://www.digitalocean.com/community/tutorials/how-to-remove-docker-images-containers-and-volumes
* Jenkins Docs - https://www.jenkins.io/doc/
* Jenkins on Dockerhub - https://hub.docker.com/r/jenkins/jenkins
* Jenkins Plugins - https://plugins.jenkins.io/
* Advanced Jenkins Tuning - https://docs.cloudbees.com/docs/admin-resources/latest/jvm-troubleshooting/#recommended-options
* Diagnosing Jenkins Errors - https://www.jenkins.io/doc/book/system-administration/diagnosing-errors/
* Using Jenkins Credentials - https://www.jenkins.io/doc/book/using/using-credentials/
* Jenkins SSH Credential Plugin - https://plugins.jenkins.io/ssh-credentials/
* Jenkins Pipelines - https://www.jenkins.io/doc/book/pipeline/
* Semantic Versioning - https://semver.org/
* Nexus Artifact Uploader Jenkins Plugin - https://plugins.jenkins.io/nexus-artifact-uploader/
* Ansible Jenkins Plugin - https://plugins.jenkins.io/ansible/
* Ansible Examples - https://github.com/ansible/ansible-examples
* A Developer's Guide To Getting Started in Ansible - https://www.redhat.com/en/blog/developers-shortcut-getting-started-ansible
* Integrating Ansible with a CI/CD Process - https://www.redhat.com/en/blog/integrating-ansible-jenkins-cicd-process
* Nexus 3 Docs - https://help.sonatype.com/repomanager3
* Nexus 3 on Dockerhub - https://hub.docker.com/r/sonatype/nexus3
* Check your YAML - https://yamlchecker.com/
* Creating Python venvs - https://docs.python.org/3/library/venv.html
* Daemonize - https://software.clapper.org/daemonize/daemonize.html
* Robot Framework - https://robotframework.org/
* Robot Framework on Github - https://github.com/robotframework/robotframework
* Robot Framework Selenium Library - https://robotframework.org/SeleniumLibrary/
* Webdrivermanager - https://github.com/rasjani/webdrivermanager
