Application.Views.Patients = Application.Views.Patients || {};

Application.Views.Patients.Index = Backbone.View.extend({
  tagName: 'section',
  className: 'patient',

  initialize: function(options) {
    this.collection.bind('reset', this.render, this);
  },

  render: function() {
    this.collection.each(function(patient) {
      this.createNodeFor(patient);
    }, this);

    return this;
  },

  createNodeFor: function(patient) {
    var template = _.template(
         "<div class='patient-name'> <%= patientName %> </div>" +
         "<div class='patient-more-info'>" +
           "<div class='doctor-name'> <%= doctorName %> </div>" +
           "<div class='patient-id'> <%= patientId %> </div>" +
         "</div>");

    jQuery(template({
      patientName: patient.get('name'),
      doctorName: patient.get('doctor_name'),
      patientId: patient.get('id')
    })).appendTo(this.el);
  },

  attachContentToCleanContainer: function() {
    jQuery('#patients-container')
      .empty()
      .append(this.render().el);

    return this;
  }
});
