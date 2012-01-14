"use strict";
/*jslint white: false, nomen: false */
/*global Application: true, Backbone: true, _: true */

Application.Models.Patient = Backbone.Model.extend({ 

  url: Application.Configuration.Urls.patients,

  parse: function(response) {
    return response;
  },

  name: function() {
    var preferredName = this.get('person').preferredName;
    return preferredName ? preferredName.display : undefined;
  },

  age: function() {
    return this.get('person').age;
  },

  address: function() {
    var preferredAddress = this.get('person').preferredAddress;
    return preferredAddress ? preferredAddress.display : undefined;
  }
});
