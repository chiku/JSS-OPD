var Application = {
  Models: {},

  Collections: {},
  collections: {},

  Router: undefined,

  Views: {
    Encounters: {},
    Patients: {}
  },

  Configuration: {
    Urls: {},
    Selectors: {}
  },

  initialize: function() {
    new Application.Router();
    Backbone.history.start();
    Application.collections.encounters.fetch();
  }
};
