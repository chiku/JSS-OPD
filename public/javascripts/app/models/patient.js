"use strict";
/*jslint white: false, nomen: false */
/*global Application: true, Backbone: true, _: true */

Application.Models.Patient = Backbone.Model.extend({ 
  url: function() {
    var urls = Application.Configuration.Urls;
    return urls.patients + "/" + this.get('id') + "." + urls.extension;
  },

  parse: function(response) {
    response.id = response.uuid;
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
