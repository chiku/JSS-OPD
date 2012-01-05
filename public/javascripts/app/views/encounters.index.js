jQuery(function() {
  Application.Views.Encounters.Index = Backbone.View.extend({
    tagName: 'section',

    className: 'encounters',

    template: jQuery(Application.Configuration.Selectors.templates.encounters).html(),

    initialize: function(options) {
      this.collection.bind('reset', this.render, this);

      new Application.Views.Encounters.Sort({
        collection: this.collection
      });
    },

    render: function() {
      jQuery(this.el).html(_.template(this.template));

      this.collection.each(function(encounter) {
        var view = new Application.Views.Encounters.Show({
          model: encounter
        });
        jQuery(Application.Configuration.Selectors.encounters).append(view.render().el);
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
});