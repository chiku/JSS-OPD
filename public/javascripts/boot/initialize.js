var Application = {
  Models: {},

  Collections: {},

  Routers: {},

  Views: {},

  Configuration: {
    Routes: {},
    Urls: {},
    Selectors: {}
  },

  initialize: function() {
    new Application.Routers.Patients();
    Backbone.history.start();
  }
};

