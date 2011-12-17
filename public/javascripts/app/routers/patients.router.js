Application.Routers.Patients = Backbone.Router.extend({
  routes: Application.Configuration.Routes.patients,

  initialize: function() {
    this.patientsView = new Application.Views.Patients.Index({
      collection: Application.collections.Patients
    });
  },

  index: function() {
    this.patientsView.attachContentToCleanContainer();
  },

  show: function(id) {
  }
});
