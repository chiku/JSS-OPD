require 'rspec'

require File.join(File.expand_path(File.dirname(__FILE__)), '..', 'lib', 'models', 'patient.rb')

ENV['RACK_ENV'] = 'test'
