require './lib/json_handler'

use Rack::Reloader if ENV['RACK_ENV'] == "development"

use JSONHandler

use Rack::Static, :urls => ["/"], :root => "public"

run Rack::File.new("public/index.html")
