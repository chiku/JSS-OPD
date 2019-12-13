An application for JSS using openMRS rest services
--------------------------------------------------

One-time setup
--------------

* Install ruby preferably version 1.9.2+. Ensure that ruby is in your path.

* Install the latest version of LTS nodejs. Ensure that `npm` is in your path.

* `git clone` the repository.

* Run the following from the root of your project.

``` shell
  gem install bundler
  bundle install
  npm install
```

Run the application
-------------------

* Build the latest version of the application. Check `Build assets` for more details.

* Bring up the server in production mode

``` shell
  bundle exec rackup -E production
```

* Visit http://localhost:9292

Build assets
------------

* We are `webpack` to build assets.

* From the root directory of the project run

``` shell
  npm run build
```

Run tests
---------

* From the root directory of the project run these commands

``` shell
  npm test
```
