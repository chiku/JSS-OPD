Application.Collections.Patients = Backbone.Collection.extend({
  model: Application.Models.Patient,

  url: function() {
    return Application.Configuration.Urls.patient + '.json';
  },

  parse: function(response) {
    return response.patients;
  },

  comparator: function(patient) {
    return patient.get("name");
  }
});

Application.collections.Patients = new Application.Collections.Patients;