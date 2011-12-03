Application.Views.Patients = Application.Views.Patients || {};

Application.Views.Patients.IndexError = Backbone.View.extend({
  el: Application.Configuration.Selectors.patients,

  initialize: function() {
    this.render();
  },

  render: function() {
    jQuery("<div>", { 'class': 'error', 'text': 'Server failed to respond'}).appendTo(this.el);
    return this;
  }
});

