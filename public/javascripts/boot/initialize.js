var Application = {
  Models: {},

  Collections: {},
  collections: {},

  Router: undefined,

  Views: {
    Patients: {}
  },

  Configuration: {
    Urls: {},
    Selectors: {}
  },

  initialize: function() {
    new Application.Router();
    Backbone.history.start();
    Application.collections.patients.fetch();
  }
};
