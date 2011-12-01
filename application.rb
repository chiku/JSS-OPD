require 'rubygems'
require 'bundler'
Bundler.setup

require 'sinatra'

require File.join('.', 'models', 'patient')

configure do
  set :haml, :format => :html5
  set :scss, :style => :expanded
  template :'layouts/application'
end

get '/css/:file.css' do
  content_type 'text/css', :charset => 'utf-8'
  scss :'assets/stylesheets/style.css'
end

get "/" do
  haml :'patients/index'
end

get "/patients.json" do
  content_type 'application/json'
  {:patients => Patient.all}.to_json
end

