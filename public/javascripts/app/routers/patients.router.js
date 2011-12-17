Application.Routers.Patients = Backbone.Router.extend({
  routes: {
    ''            : 'index',
    'patients'    : 'index',
    'patients/:id': 'show'
  },

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
