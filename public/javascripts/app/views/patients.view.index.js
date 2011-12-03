Application.Views.Patients = {};

Application.Views.Patients.Index = Backbone.View.extend({
  initialize: function(patients) {
    this.patients = jQuery(Application.Configuration.Selectors.patients);
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

