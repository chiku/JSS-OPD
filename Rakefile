require 'jasmine'

load 'jasmine/tasks/jasmine.rake'

desc "Minify javascript and stylesheet files"
task :minify do
  system "juicer merge --force public/javascripts/all.js"
  system "juicer merge --force public/stylesheets/all.css"
end

namespace :switch_to do
  def switch_to env
    FileUtils.rm_f "public/index.html"
    FileUtils.rm_f "spec/javascripts/index.html"
    FileUtils.ln_s "index.#{env}.html", "public/index.html"
    FileUtils.ln_s "index.#{env}.html", "spec/javascripts/index.html"
    puts "Index symlinks now point to #{env}"
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

task :default => [:'jasmine:ci']
