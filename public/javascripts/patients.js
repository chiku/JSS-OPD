var Application = {
  Models: {},

  Collections: {},

  Views: {
    Patients: {}
  },

  Routers: {},

  initialize: function() {
    new Application.Routers.Patients();
    Backbone.history.start();
  }
};

Application.Models.Patient = Backbone.Model.extend({
  url: function() {
    return Configurations.urls.patient + this.get('id') + '.json';
  }
});


Application.Collections.Patients = Backbone.Collection.extend({
  model: Application.Models.Patient,

  url: function() {
    return Configurations.urls.patient + '.json';
  },

  parse: function(response) {
    return response.patients;
  }
});


Application.Routers.Patients = Backbone.Router.extend({
  routes: {
    "":             "index",
    "patients":     "index",
    "patients:/id": "show"
  },

  show: function(id) {
    var patient = new Application.Models.Patient({id: id});
    new Application.Views.Patients.Show({model: patient});
  },

  index: function() {
    new Application.Collections.Patients().fetch({
      success: function(patients, response) {
        return new Application.Views.Patients.Index(patients.models, this.containers);
      }
    });
  }
});

Application.Views.Patients.Index = Backbone.View.extend({
  initialize: function(patients) {
    this.container = jQuery(Configurations.selectors.patients);
    this.render(patients);
  },

  render: function(patients) {
    _.each(patients, function(patient) {
      jQuery('<div>', {
        'class': 'patient',
        'text': patient.get('name')
      }).appendTo(this.container);
    });
  }
});

