var Application = {
    Models: {},

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
    var base = '/documents';
    return base + this.id;
  }
});


Application.Routers.Patients = Backbone.Router.extend({
  routes: {
    "patients:/id": "show",
    "":             "index"
  },

  show: function(id) {
    var patient = new Application.Models.Patient({id: id});
    doc.fetch({
      success: function(model, response) {
        new Application.Views.Patients.Show({model: patient})
      }
    });
  },

  index: function() {
    jQuery.getJSON('/patients.json', function(document) {
      var patients = _(document.patients).map(function(patient) { return new Application.Models.Patient(patient); });
      return new Application.Views.Patients.Index(patients);
    });
  }
});

Application.Views.Patients.Index = Backbone.View.extend({
  initialize: function(patients) {
    this.container = jQuery('#patients-container');
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

window.Application = Application;

