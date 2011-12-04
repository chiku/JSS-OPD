Application.Views.Patients = Application.Views.Patients || {};

Application.Views.Patients.Index = Backbone.View.extend({
  el: '#' + Application.Configuration.Selectors.viaId.patients,

  initialize: function(options) {
    this.patients = options.collection;
    this.render(options.collection);
  },

  render: function() {
    _(this.patients).each(function(patient) {
      this.createNodeFor(patient);
    }, this);

    return this;
  },

  createNodeFor: function(patient) {
    var template = _.template(
      "<div class='patient'>" +
         "<div class='patient-name'> <%= patientName %> </div>" +
         "<div class='patient-more-info'>" +
           "<div class='doctor-name'> <%= doctorName %> </div>" +
           "<div class='patient-id'> <%= patientId %> </div>" +
         "</div>" +
      "</div>");

    jQuery(template({
      patientName: patient.get('name'),
      doctorName: patient.get('doctor_name'),
      patientId: patient.get('id')
    })).appendTo(this.el);
  }
});

