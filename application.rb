require 'bundler'
Bundler.setup

require 'sinatra'

Dir[File.join(File.dirname(__FILE__), 'lib', 'models', '*.rb')].each {|file| require file }

use Rack::Auth::Basic, "Restricted Area" do |username, password|
  [username, password] == ['developer', '!abcd1234']
end

get "/" do
  File.read(File.join('public', 'index.html'))
end

get "/patients.json" do
  content_type 'application/json'
  ({:patients => Patient.all}).to_json
end

get "/patients/:id.json" do
  content_type 'application/json'
  Patient.find(params[:id]).to_json
end

