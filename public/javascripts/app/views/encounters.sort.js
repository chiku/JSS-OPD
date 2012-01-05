jQuery(function() {
  Application.Views.Encounters.Sort = Backbone.View.extend({
    el: jQuery(Application.Configuration.Selectors.patientsSort),

    events: {
      'click': 'sortPatients'
    },

    sortPatients: function(e) {
      var property = jQuery(e.target).attr('data-sort-by');
      this.collection.reorderBy(property);
    }
  });
});
