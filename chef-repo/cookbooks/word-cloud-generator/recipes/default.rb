#
# Cookbook:: word-cloud-generator
# Recipe:: default
#
# Copyright:: 2017, The Authors, All Rights Reserved.

version = node['word-cloud-generator']['version']

directory '/opt/cd_class' do
  owner 'root'
  group 'root'
  mode '0755'
  action :create
end

remote_file '/opt/cd_class/word-cloud-generator.gz' do
  source "http://admin:admin123@nexus:8081/repository/word-cloud-generator/cd_class/word-cloud-generator/#{version}/word-cloud-generator-#{version}.gz"
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

poise_service 'word-cloud-generator' do
  provider :dummy
  command '/opt/cd_class/word-cloud-generator > /var/log/word-cloud-generator.log 2>&1 &'
  action [ :stop, :start ]
end