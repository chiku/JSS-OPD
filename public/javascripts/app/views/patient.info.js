Application.Views.Patients = Application.Views.Patients || {};

Application.Views.Patients.Info = Backbone.View.extend({
  tagName: 'li',

  className: 'patient',

  template: function() {
    return _.template(jQuery(Application.Configuration.Selectors.templates.patient).html())
  },

  initialize: function(options) {
    this.model.bind('change', this.render, this);
  },

  render: function() {
    var patientHtml = this.template()(this.model.toJSON());
    $(this.el).html(patientHtml);

    return this;
  }
});
