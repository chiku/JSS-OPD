jQuery(function() {
  Application.Views.Encounters.Show = Backbone.View.extend({
    tagName: 'li',

    className: 'encounter',

    events: {
      'click': 'showDetails'
    },

    template: jQuery(Application.Configuration.Selectors.templates.patient).html(),

    initialize: function(options) {
      this.model.bind('change', this.render, this);
      this.detailedView = new Application.Views.Patients.Show({
        model: this.model
      });
    },

    render: function() {
      var patientHtml = _.template(this.template)(this.model.toJSON());
      jQuery(this.el).html(patientHtml);

      return this;
    },

    showDetails: function() {
      this.detailedView.attachContentToCleanContainer();
    }
  });
});
