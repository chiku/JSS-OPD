"use strict";
/*jslint white: false, nomen: false */
/*global Application: true, Backbone: true, _: true */

var Application = {
  Models: {},

  Collections: {},
  collections: {},

  Router: undefined,

  Views: {
    Encounters: {},
    Patients: {}
  },

  Configuration: {
    Urls: {},
    Selectors: {}
  },

  initialize: function() {
    var router = new Application.Router();
    Backbone.history.start();
    Application.collections.encounters.fetch();
  }
};
