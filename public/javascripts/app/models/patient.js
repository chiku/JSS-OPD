"use strict";
/*jslint white: false, nomen: false */
/*global Application: true, Backbone: true, _: true */

Application.Models.Patient = Backbone.Model.extend({ 

	url: Application.Configuration.Urls.patients,

	parse: function(response) {
		return response;
	},

	Name: function() {
      var preferredName = this.get('person').preferredName;
    	return preferredName ? preferredName.display : undefined;
  	},

  Age: function(encounter) {
      return this.get('person').age;
  	},

	Address: function(encounter) {
      var preferredAddress = this.get('person').preferredAddress;
      return preferredAddress ? preferredAddress.display : undefined;
    
  	}
});
