"use strict";
/*jslint white: false, nomen: false */
/*global Application: true, Backbone: true, _: true */

Application.Models.Patient = Backbone.Model.extend({ 

  url: Application.Configuration.Urls.patients,

  parse: function(response) {
    return response;
  },

  person: function() {
    var person = this.get('person');
    return person ? person : {};
  },

  name: function() {
    var preferredName = this.person().preferredName;
    return preferredName ? preferredName.display : undefined;
  },

  age: function() {
    return this.person().age;
  },

  address: function() {
    var preferredAddress = this.person().preferredAddress;
    return preferredAddress ? preferredAddress.display : undefined;
  }
});
