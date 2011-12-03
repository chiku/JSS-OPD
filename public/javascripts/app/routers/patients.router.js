Application.Routers.Patients = Backbone.Router.extend({
  routes: Application.Configuration.Routes.patients,

  index: function() {
    new Application.Collections.Patients().fetch({
      success: function(patients, response) {
        new Application.Views.Patients.Index({collection: patients.models});
      }
    });
  },

  show: function(id) {
  }
});

