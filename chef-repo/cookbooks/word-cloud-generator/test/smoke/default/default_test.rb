# # encoding: utf-8

# Inspec test for recipe word-cloud-generator::default

# The Inspec reference, with examples and extensive documentation, can be
# found at http://inspec.io/docs/reference/resources/

describe http('http://localhost:8888/') do
  its('status') { should eq 200 }
  its('headers.Content-Type') { should include 'text/html' }
  its('body') { should include 'Enter text here...' }
end

describe http('http://localhost:8888/api', params: {format: 'html'}, method: 'POST', headers:{'Content-Type' => 'application/json'}, data:'{"text":"ths is a really really really important thing this is"}') do
  its('status') { should eq 200 }
  its('headers.Content-Type') { should include 'application/json' }
  its('body') { should include '"really": 3,' }
end
