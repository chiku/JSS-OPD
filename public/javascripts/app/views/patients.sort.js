Application.Views.Patients || (Application.Views.Patients = {});

Application.Views.Patients.Sort = Backbone.View.extend({
  el: function() {
    return $(Application.Configuration.Selectors.pateintsSort);
  },

  events: {
    'click': 'sortPatients'
  },

  initialize: function(options) {
  },

  sortPatients: function(e) {
    var property = jQuery(e.target).attr('data-sort-by');
    this.collection.reorderBy(property);
  }
});
