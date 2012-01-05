jQuery(function() {
  Application.Views.Patients.Show = Backbone.View.extend({
    tagName: 'ul',

    className: 'patient',

    template: jQuery(Application.Configuration.Selectors.templates.patient).html(),

    initialize: function(options) {
      this.model.bind('change', this.attachContentToCleanContainer, this);
      this.selectors = Application.Configuration.Selectors;
    },

    render: function() {
      var html = _.template(this.template)(this.model.toJSON());
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
});
