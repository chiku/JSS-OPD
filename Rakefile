require 'rspec/core/rake_task'
require 'jasmine'

load 'jasmine/tasks/jasmine.rake'

desc "Run specs"
task :spec do
  RSpec::Core::RakeTask.new(:spec) do |t|
    t.rspec_opts = %w{--colour --format progress}
    t.pattern = 'spec/**/*_spec.rb'
  end
end

desc "Minify javascript and stylesheet files"
task :minify do
  system "juicer  merge -i --force public/javascripts/all.js"
  system "juicer  merge -i --force public/stylesheets/all.css"
end

task :default => [:spec, :'jasmine:ci']
