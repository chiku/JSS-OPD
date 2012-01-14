desc "Minify javascript and stylesheet files"
task :minify do
  system "juicer merge --force public/javascripts/all.js"
  system "juicer merge --force public/stylesheets/all.css"
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
