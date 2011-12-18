Application.Views.Patients = Application.Views.Patients || {};

Application.Views.Patients.Show = Backbone.View.extend({
  tagName: 'ul',

  className: 'patient-details',

  template: function() {
    return _.template(jQuery(Application.Configuration.Selectors.templates.patientDetails).html())
  },

  initialize: function(options) {
    this.model.bind('change', this.attachContentToCleanContainer, this);
  },

  render: function() {
    var html = this.template()(this.model.toJSON());
    jQuery(this.el).html(html);

    return this;
  },

  attachContentToCleanContainer: function() {
    jQuery(Application.Configuration.Selectors.patientDetails)
      .empty()
      .append(this.render().el);

    return this;
  }
});
