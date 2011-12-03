require 'rake/testtask'
require 'jasmine'

load 'jasmine/tasks/jasmine.rake'

Rake::TestTask.new do |t|
  t.pattern = File.join('spec', '**','*_spec.rb')
end

task :default => [:test, :'jasmine:ci']


