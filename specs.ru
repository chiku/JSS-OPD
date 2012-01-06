#\-p 8888

map "/spec" do
  use Rack::Static, :urls => ["/"], :root => "spec/javascripts"
end

use Rack::Static, :urls => ["/"], :root => "public"

run Rack::File.new("spec/javascripts/spec.runner.html")
