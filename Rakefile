desc "Minify javascript and stylesheet files"
task :minify do
  system "juicer merge --force public/javascripts/all.js"
  system "juicer merge --force public/stylesheets/all.css"
end

task :minify2 do
  current_path = File.expand_path(File.dirname(__FILE__))

  library_js_files = File.join(current_path, "public", "javascripts", "lib", "**", "*.js")
  application_js_dirsets = [
    File.join(current_path, "public", "javascripts", "boot", "initialize.js"),
    File.join(current_path, "public", "javascripts", "config", "**", "*.js"),
    File.join(current_path, "public", "javascripts", "app", "models", "**", "*.js"),
    File.join(current_path, "public", "javascripts", "app", "collections", "**", "*.js"),
    File.join(current_path, "public", "javascripts", "app", "router.js"),
    File.join(current_path, "public", "javascripts", "app", "views","**", "*.js"),
    File.join(current_path, "public", "javascripts", "boot", "run.js"),
  ]

  externs = ""
  Dir[library_js_files].each do |file|
    externs << " --externs #{file}"
  end

  files = ""
  application_js_dirsets.each do |dirset|
    Dir[dirset].each do |file|
      files << " --js #{file}"
    end
  end

  statement = <<-EOS
    java -jar lib/closure-compiler/compiler.jar          \
      #{files} #{externs}                                \
      --warning_level QUIET                              \
      --js_output_file=public/javascripts/all.min.js
    EOS
  puts "Executing\n#{statement}...\n"
  `#{statement}`
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
