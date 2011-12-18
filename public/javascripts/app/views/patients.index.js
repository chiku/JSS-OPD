Application.Views.Patients = Application.Views.Patients || {};

Application.Views.Patients.Index = Backbone.View.extend({
  tagName: 'section',

  className: 'patients',

  template: function() {
    return _.template(jQuery(Application.Configuration.Selectors.templates.patients).html());
  },

  initialize: function(options) {
    this.collection.bind('reset', this.render, this);
  },

  render: function() {
    jQuery(this.el).html(this.template({}));

    this.collection.each(function(patient) {
      var view = new Application.Views.Patients.Info({model: patient});
      jQuery(Application.Configuration.Selectors.patients).append(view.render().el);
    }, this);

    return this;
  },

  attachContentToCleanContainer: function() {
    jQuery(Application.Configuration.Selectors.appointments)
      .empty()
      .append(this.render().el);

    return this;
  }
});
