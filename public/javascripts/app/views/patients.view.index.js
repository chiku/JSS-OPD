Application.Views.Patients = Application.Views.Patients || {};

Application.Views.Patients.Index = Backbone.View.extend({
  tagName: 'section',

  className: 'patient',

  template: function() {
    return _.template(jQuery("#template-patient").html())
  },

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
    var patientHtml = this.template()(patient.toJSON());
    jQuery(patientHtml).appendTo(this.el);
  },

  attachContentToCleanContainer: function() {
    jQuery('#patients-container')
      .empty()
      .append(this.render().el);

    return this;
  }
});
