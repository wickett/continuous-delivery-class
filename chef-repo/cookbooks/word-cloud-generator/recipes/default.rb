#
# Cookbook:: word-cloud-generator
# Recipe:: default
#
# Copyright:: 2017, The Authors, All Rights Reserved.

directory '/opt/cd_class' do
  owner 'root'
  group 'root'
  mode '0755'
  action :create
end

remote_file '/opt/cd_class/word-cloud-generator.gz' do
  source 'http://admin:admin123@nexus:8081/repository/word-cloud-generator/cd_class/word-cloud-generator/1.16/word-cloud-generator-1.16.gz'
  owner 'root'
  group 'root'
  mode '0755'
  action :create
end

execute "gunzip" do
  user "root"
  group "root"
  cwd "/opt/cd_class"
  action :run
  command "gunzip -f word-cloud-generator.gz"
end

service "word-cloud-generator-service" do
  start_command "/opt/cd_class/word-cloud-generator"
  stop_command "pkill word-cloud-generator"
  action [ :enable, :start ]
end

