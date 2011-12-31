require File.join('.', 'application')

use Rack::Static, :urls => ["/javascripts", "/stylesheets"], :root => "public"

use Rack::Reloader if ENV['RACK_ENV'] == "development"

map "/" do
  run Rack::File.new("public/index.html")
end

map "/patients.json" do
  run PatientsManagament::Application
end
