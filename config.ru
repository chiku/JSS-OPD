use Rack::Reloader if ENV['RACK_ENV'] == "development"

use Rack::Static, :urls => ["/"], :root => "public", :index => "index.html"

run Rack::File.new("public/index.html")
