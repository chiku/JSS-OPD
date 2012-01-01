Application.Views.Patients.Index = Backbone.View.extend({
  tagName: 'section',

  className: 'patients',

  template: function() {
    return _.template(jQuery(this.selectors.templates.patients).html());
  },

  initialize: function(options) {
    this.collection.bind('reset', this.render, this);
    this.selectors = Application.Configuration.Selectors;

    new Application.Views.Patients.Sort({
      collection: this.collection
    });
  },

  render: function() {
    jQuery(this.el).html(this.template({}));

    this.collection.each(function(patient) {
      var view = new Application.Views.Patients.Info({
        model: patient
      });
      jQuery(this.selectors.patients).append(view.render().el);
    }, this);

    return this;
  },

  attachContentToCleanContainer: function() {
    jQuery(this.selectors.appointments)
      .empty()
      .append(this.render().el);

    return this;
  }
});
