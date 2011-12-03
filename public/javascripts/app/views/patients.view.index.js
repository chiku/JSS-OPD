Application.Views.Patients = {};

Application.Views.Patients.Index = Backbone.View.extend({
  el: Application.Configuration.Selectors.patients,

  initialize: function(options) {
    this.render(options.collection);
  },

  render: function(patients) {
    _(patients).each(function(patient) {
      this.createNodeFor(patient);
    }, this);

    return this;
  },

  createNodeFor: function(patient) {
    var template = _.template(
      "<div class='patient'>" +
         "<div class='patient-name'> <%= patientName %> </div>" +
         "<div class='doctor-name'> <%= doctorName %> </div>" +
         "<div class='patient-id'> <%= patientId %> </div>" +
         "<div class='clear-left'></div>" +
      "</div>");

    jQuery(template({
      patientName: patient.get('name'),
      doctorName: patient.get('doctor_name'),
      patientId: patient.get('id')
    })).appendTo(this.el);
  }
});

