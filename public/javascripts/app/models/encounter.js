"use strict";
/*jslint white: false, nomen: false */
/*global Application: true, Backbone: true, _: true */

Application.Models.Encounter = Backbone.Model.extend({
  patientId: function() {
    return this.patient().uuid;
  },

  patientName: function() {
    return this.patient().display;
  },

  providerName: function() {
    return this.provider().display;
  },

  patient: function() {
    return this._retrivePropertiesFor('patient');
  },

  provider: function() {
    return this._retrivePropertiesFor('provider');
  },

  _retrivePropertiesFor: function(person) {
    return this.get(person) || {};
  }
});
