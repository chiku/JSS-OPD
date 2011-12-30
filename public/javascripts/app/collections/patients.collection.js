Application.Collections.Patients = Backbone.Collection.extend({
  model: Application.Models.Patient,

  url: Application.Configuration.Urls.patients,

  parse: function(response) {
    return response.patients;
  },

  comparator: function(patient) {
    return patient.get("name");
  },

  reorderBy: function(field) {
    this.comparator = function(patient) {
      return patient.get(field);
    };
    this.sort();
    return this;
  }
});

Application.collections.patients = new Application.Collections.Patients;
