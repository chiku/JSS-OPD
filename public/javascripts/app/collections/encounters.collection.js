Application.Collections.Encounters = Backbone.Collection.extend({
  model: Application.Models.Encounter,

  url: Application.Configuration.Urls.encounters,

  parse: function(response) {
    var encounters = response.results;
    _(encounters).each(function(encounter) {
      encounter.id = encounter.uuid;
    });

    return encounters;
  },

  comparator: function(encounter) {
    return encounter.get("name");
  },

  reorderBy: function(field) {
    this.comparator = function(encounter) {
      return encounter.get(field);
    };
    this.sort();
    return this;
  }
});

Application.collections.encounters = new Application.Collections.Encounters;
