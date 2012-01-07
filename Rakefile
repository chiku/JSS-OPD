require 'jasmine'

load 'jasmine/tasks/jasmine.rake'

desc "Minify javascript and stylesheet files"
task :minify do
  system "juicer  merge -i --force public/javascripts/all.js"
  system "juicer  merge -i --force public/stylesheets/all.css"
end

task :default => [:'jasmine:ci']
