require "sprockets"
require "jasmine"

load 'jasmine/tasks/jasmine.rake'

desc "Minify stylesheet files"
task :minify do
  sprockets = Sprockets::Environment.new do |env|
    env.logger = Logger.new(STDOUT)
    env.css_compressor = :sass
  end

  sprockets.append_path("public/stylesheets")
  css_assets = sprockets.find_asset("all.css")
  css_assets.write_to("public/stylesheets/all.min.css")
end
