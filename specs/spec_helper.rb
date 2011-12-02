require 'minitest/autorun'
require 'minitest/spec'
require 'minitest/reporters'

MiniTest::Unit.runner = MiniTest::SuiteRunner.new
MiniTest::Unit.runner.reporters << MiniTest::Reporters::ProgressReporter.new

