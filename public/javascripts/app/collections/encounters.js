"use strict";
/*jslint white: false, nomen: false */
/*global Application: true, Backbone: true, _: true */

Application.Collections.Encounters = Backbone.Collection.extend({
  model: Application.Models.Encounter,

  url: function() {
    var urls = Application.Configuration.Urls;
    return urls.encounters + "." + urls.extension;
  },

  parse: function(response) {
    var encounters = response.results;
    _(encounters).each(function(encounter) {
      encounter.id = encounter.uuid;
    });

    return encounters;
  },

  comparator: function(encounter) {
    return encounter.patientName();
  },

  reorderBy: function(field) {
    if (!this._allowedReorderOn(field)) {
      return this;
    }

    this.comparator = function(encounter) {
      return encounter[field]();
    };

    this.sort();
    return this;
  },

  _allowedReorderOn: function(field) {
    return _(["patientName", "providerName", "appointmentTime"]).include(field);
  }
});

Application.collections.encounters = new Application.Collections.Encounters();
