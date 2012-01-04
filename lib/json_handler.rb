class JSONHandler
  def initialize(app)
    @app = app
  end

  def call(env)
    if env["REQUEST_URI"].end_with? ".json"
      Rack::File.new("sampleWSResponses").call(env)
    else
      @app.call(env)
    end
  end
end
