require './lib/json_handler'

use Rack::Reloader if ENV['RACK_ENV'] == "development"

use JSONHandler

use Rack::Static, :urls => ["/"], :root => "public"

map "/spec" do
  use Rack::Static, :urls => ["/"], :root => "spec/javascripts"
end

run Rack::File.new("public/index.html")
