"use strict";
/*jslint white: false, nomen: false */
/*global Application: true, Backbone: true, _: true, jQuery: true */

Application.Views.Encounters.Sort = Backbone.View.extend({
  el: function() {
    return jQuery(Application.Configuration.Selectors.encountersSort)
  },

  events: {
    'click': 'sortPatients'
  },

  sortPatients: function(e) {
    var property = jQuery(e.target).attr('data-sort-by');
    this.collection.reorderBy(property);
  }
});
