Application.Router = Backbone.Router.extend({
  routes: {
    ''            : 'index',
    'encounters'  : 'index',
    'patients/:id': 'show'
  },

  initialize: function() {
    this.encountersView = new Application.Views.Encounters.Index({
      collection: Application.collections.encounters,
      encounterShowsContainerSelector: Application.Configuration.Selectors.encounters
    });
  },

  index: function() {
    this.encountersView.attachContentToCleanContainer();
  },

  show: function(patientId) {
  }
});
