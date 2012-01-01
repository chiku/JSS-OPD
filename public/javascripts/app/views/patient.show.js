Application.Views.Patients.Show = Backbone.View.extend({
  tagName: 'ul',

  className: 'patient-details',

  template: function() {
    return _.template(jQuery(this.selectors.templates.patientDetails).html())
  },

  initialize: function(options) {
    this.model.bind('change', this.attachContentToCleanContainer, this);
    this.selectors = Application.Configuration.Selectors;
  },

  render: function() {
    var html = this.template()(this.model.toJSON());
    jQuery(this.el).html(html);

    return this;
  },

  attachContentToCleanContainer: function() {
    jQuery(this.selectors.patientDetails)
      .empty()
      .append(this.render().el);

    return this;
  }
});
