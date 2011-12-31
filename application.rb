#!/usr/bin/env ruby

require 'sinatra/base'
require 'sinatra/reloader'

MODEL_FILES = Dir[File.join(File.dirname(__FILE__), 'lib', 'models', '*.rb')]
MODEL_FILES.each {|file| require file }

module PatientsManagament
  class Application < Sinatra::Base
    configure :development, :test do
      register Sinatra::Reloader
      MODEL_FILES.each {|file| puts file }
      MODEL_FILES.each {|file| also_reload file }
    end

    get "/" do
      content_type 'application/json'
      ({:patients => Patient.all}).to_json
    end
  end
end
