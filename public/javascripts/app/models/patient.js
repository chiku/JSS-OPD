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

  blank: function() {
    return {
      preferredName   : {display: undefined},
      preferredAddress: {display: undefined}
    }
  },

  person: function() {
    var person = this.get('person') || this.blank();
    person.preferredName = person.preferredName || this.blank().preferredName;
    person.preferredAddress = person.preferredAddress || this.blank().preferredAddress;
    return person;
  },

  name: function() {
    return this.person().preferredName.display;
  },

  age: function() {
    return this.person().age;
  },

  address: function() {
    return this.person().preferredAddress.display;
  },

  forceFetch: function() {
    this.fetch();
    this.trigger('change');
  }
});
