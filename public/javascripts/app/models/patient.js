Application.Models.Patient = Backbone.Model.extend({
  url: function() {
    return Application.Configuration.Urls.patient + '/' + this.get('id') + '.json';
  }
});

