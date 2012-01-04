Application.Views.Encounters.Index = Backbone.View.extend({
  tagName: 'section',

  className: 'encounters',

  template: function() {
    return _.template(jQuery(this.selectors.templates.encounters).html());
  },

  initialize: function(options) {
    this.collection.bind('reset', this.render, this);
    this.selectors = Application.Configuration.Selectors;

    new Application.Views.Encounters.Sort({
      collection: this.collection
    });
  },

  render: function() {
    jQuery(this.el).html(this.template({}));

    this.collection.each(function(patient) {
      var view = new Application.Views.Encounters.Show({
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
