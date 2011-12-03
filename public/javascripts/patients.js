var Application = {
  Models: {},

  Collections: {},

  Routes: {},

  Routers: {},

  Views: {
    Patients: {}
  },

  initialize: function() {
    new Application.Routers.Patients();
    Backbone.history.start();
  }
};

Application.Models.Patient = Backbone.Model.extend({
  url: function() {
    return Configurations.urls.patient + '/' + this.get('id') + '.json';
  }
});


Application.Collections.Patients = Backbone.Collection.extend({
  model: Application.Models.Patient,

  url: function() {
    return Configurations.urls.patient + '.json';
  },

  parse: function(response) {
    return response.patients;
  },

  comparator: function(patient) {
    return patient.get("name");
  }
});


Application.Routes = (function() {
  var routes = {};

  routes.patients = {};
  routes.patients[''] = 'index';
  routes.patients[Configurations.documents.patient] = 'index';
  routes.patients[Configurations.documents.patient + '/:id'] = 'show';

  return routes;
})();

Application.Routers.Patients = Backbone.Router.extend({
  routes: Application.Routes.patients,

  index: function() {
    new Application.Collections.Patients().fetch({
      success: function(patients, response) {
        new Application.Views.Patients.Index(patients.models);
      }
    });
  },

  show: function(id) {
  }
});

Application.Views.Patients.Index = Backbone.View.extend({
  initialize: function(patients) {
    this.patients = jQuery(Configurations.selectors.patients);
    this.render(patients);
  },

  render: function(patients) {
    _(patients).each(function(patient) {
      this.createNodeFor(patient);
    }, this);
  },

  createNodeFor: function(patient) {
    var patientNameElement = jQuery('<div>', { 'class': 'patient-name', 'text': patient.get('name') });
    var doctorNameElement = jQuery('<div>', { 'class': 'doctor-name', 'text': '(' + patient.get('doctor_name') + ')'});
    var patientIdElement = jQuery('<div>', { 'class': 'patient-id', 'text': patient.get('id') });
    var patientElement = jQuery('<div>', { 'class': 'patient'});
    var clearElement = jQuery('<div>', { 'class': 'clear-left'})
    patientElement.append(patientNameElement).append(doctorNameElement).append(patientIdElement).append(clearElement);
    patientElement.appendTo(this.patients);
  }
});

