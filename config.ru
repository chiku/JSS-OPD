Dir[File.join(File.dirname(__FILE__), 'lib', 'models', '*.rb')].each { |file| require file }

use Rack::Static, :urls => ["/javascripts", "/stylesheets"], :root => "public"

use Rack::Reloader if ENV['RACK_ENV'] == "development"

map "/" do
  run Rack::File.new("public/index.html")
end

class PatientJSON
  def call(env)
    body = ({:patients => Patient.all}).to_json
    [200, {"Content-Type" => "application/json"}, [body]]
  end
end

map "/patients.json" do
  run PatientJSON.new
end
