var Application = {
  Models: {},

  Collections: {},

  collections: {},

  Routers: {},

  Views: {},

  Configuration: {
    Urls: {},
    Selectors: {}
  },

  initialize: function() {
    new Application.Routers.Patients();
    Backbone.history.start();
    Application.collections.patients.fetch();
  }
};
