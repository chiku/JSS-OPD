use Rack::Reloader if ENV['RACK_ENV'] == "development"

use Rack::Static, :urls => ["/"], :root => "public"

run Rack::File.new("public/index.html")
