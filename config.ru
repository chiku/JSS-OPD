require File.join('.', 'application')

use Rack::Static, :urls => ["/javascripts", "/stylesheets"], :root => "public"

map "/" do
  run Rack::File.new("public/index.html")
end

map "/patients.json" do
  run PatientsManagament::Application
end
