#!/usr/bin/env ruby

require 'sinatra/base'

MODEL_FILES = Dir[File.join(File.dirname(__FILE__), 'lib', 'models', '*.rb')]
MODEL_FILES.each {|file| require file }

module PatientsManagament
  class Application < Sinatra::Base

    get "/" do
      File.read(File.join('public', 'index.html'))
    end

    get "/patients.json" do
      content_type 'application/json'
      ({:patients => Patient.all}).to_json
    end
  end
end
