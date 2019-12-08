require "sprockets"

desc "Minify javascript and stylesheet files"
task :minify do
  sprockets = Sprockets::Environment.new do |env|
    env.logger = Logger.new(STDOUT)
    env.js_compressor = :uglify
    env.css_compressor = :sass
  end

  sprockets.append_path("public/javascripts")
  sprockets.append_path("public/stylesheets")
  js_assets = sprockets.find_asset("all.js")
  css_assets = sprockets.find_asset("all.css")

  js_assets.write_to("public/javascripts/all.min.js")
  css_assets.write_to("public/stylesheets/all.min.css")
end

namespace :switch_to do
  def switch_to env
    FileUtils.rm_f "public/index.html"
    FileUtils.rm_f "spec/javascripts/index.html"
    if RUBY_PLATFORM.downcase.include?("mswin") or RUBY_PLATFORM.downcase.include?("mingw") # No symlink in windows
      FileUtils.cp "public/index.#{env}.html", "public/index.html"
      FileUtils.cp "spec/javascripts/index.#{env}.html", "spec/javascripts/index.html"
    else
      FileUtils.ln_s "index.#{env}.html", "public/index.html"
      FileUtils.ln_s "index.#{env}.html", "spec/javascripts/index.html"
    end
    puts "Indexes now point to #{env}"
  end

  desc "Switch to development mode"
  task :dev do
    switch_to "dev"
  end

  desc "Switch to production mode"
  task :prod do
    switch_to "prod"
  end
end
