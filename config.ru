Dir[File.join(File.dirname(__FILE__), 'lib', 'models', '*.rb')].each { |file| require file }

class PatientJSON
  def call(env)
    body = ({:patients => Patient.all}).to_json
    [200, {"Content-Type" => "application/json"}, [body]]
  end
end

use Rack::Reloader if ENV['RACK_ENV'] == "development"

map "/patients.json" do
  run PatientJSON.new
end

map "/spec" do
  use Rack::Static, :urls => ["/"], :root => "spec/javascripts"
end

use Rack::Static, :urls => ["/"], :root => "public"

map "/" do
  run Rack::File.new("public/index.html")
end
