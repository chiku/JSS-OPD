"use strict";
/*jslint white: false, nomen: false */
/*global Application: true, Backbone: true, _: true */

Application.Models.Encounter = Backbone.Model.extend({
  patientName: function(encounter) {
    return this._retrivePropertyFor('patient');
  },

  providerName: function(encounter) {
    return this._retrivePropertyFor('provider');
  },

  _retrivePropertyFor: function(property) {
    var person = this.get(property);
    return person ? person.display : undefined;
  }
});
