# This repository is dead. #

# Please refer to the actual work at https://github.com/chiku/JSS-OPD/ #

====================================================================

A spike to test suitability of backbone for openMRS
---------------------------------------------------

Steps to get the application running
------------------------------------

* Install ruby preferably version 1.9.2+. Ensure that ruby is in your path

* git clone the repository

* Install dependencies by running these commands from the root directory of the project. Running bundle is a one time thing. Re-run bundle when the file Gemfile changes.

``` shell
  gem install bundler
  bundle install
```

* If you want to minify javascript and stylesheet files on your local box. This is a one-time step. See 'Minify assets' for more details. (Optional step)

``` shell
  juicer install yui_compressor
  juicer install jslint
```

* Bring up the server in development mode

``` shell
  rackup
```

* Visit http://localhost:9292

*Note*

Run under production environment
--------------------------------

* Ensure that assets are minified. See 'Minify assets' for more details.

* Bring up the server in production mode

``` shell
  rackup -E production
```

* Visit http://localhost:9292

Run tests
---------

* From the root directory of the project run these commands

``` shell
  rake
```

Minify assets
-------------

* We are using juicer to minify assets. This internally uses YUI-compressor. 'java' should be available in your path for this to work.

* From the root directory of the project run

``` shell
  rake minify
```
