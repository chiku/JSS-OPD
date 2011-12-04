A spike to test suitability of backbone for openMRS
---------------------------------------------------

Steps to get the application running
------------------------------------

* Install ruby preferably version 1.9.2+. Ensure that ruby is in your path

* git clone the repository

* From the root directory of the project run these command

``` shell
  gem install bundler
  bundle install
  ruby application.rb
```

* Visit http://localhost:4567

*Note*

_Running bundle is a one time thing. Re-run bundle when the file Gemfile changes_

Steps to run tests
----------------

* From the root directory of the project run these commands

``` shell
  gem install bundler # if you haven't already install bundler
  bundle install # if you haven't already run bundle
  rake
```

