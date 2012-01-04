An application for JSS using openMRS rest services
--------------------------------------------------

Steps to get the application running
------------------------------------

* Install ruby preferably version 1.9.2+. Ensure that ruby is in your path.

* git clone the repository

* Run the following from the root of your project.

``` shell
  gem install rack
```

* Bring up the server in development mode

``` shell
  rackup
```

* Visit http://localhost:9292

Run under production environment
--------------------------------

* Switch to production branch

``` shell
  git checkout production
```

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
  rackup
```

* Visit http://localhost:8889

Minify assets
-------------

* We are using juicer to minify assets. This internally uses YUI-compressor. 'java' should be available in your path for this to work.


* If you want to install tools to minify javascript and stylesheet files on your local box, run the following command. This is a one-time step.

``` shell
  gem install juicer
  juicer install yui_compressor
  juicer install jslint
```

* From the root directory of the project run

``` shell
  rake minify
```
