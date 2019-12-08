#\-p 8888

use Rack::Reloader

use Rack::Static, :urls => ["/"], :root => "spec/javascripts", :index => "index.html"

run Rack::File.new("spec/javascripts/spec.runner.html")
