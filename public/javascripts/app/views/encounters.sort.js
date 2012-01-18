"use strict";
/*jslint white: false, nomen: false */
/*global Application: true, Backbone: true, _: true, jQuery: true */

Application.Views.Encounters.Sort = Backbone.View.extend({
  el: function() {
    return jQuery(Application.Configuration.Selectors.encountersSort);
  },

  events: {
    'click': 'sortPatients'
  },

  initialize: function() {
    this.collection.bind("encounter:sort", this.activateSort, this);
  },

  sortPatients: function(e) {
    var property = jQuery(e.target).attr('data-sort-by');
    if (!property) {
      return;
    }

    this.collection.reorderBy(property);
  },

  activateSort: function() {
    var selector = "li[data-sort-by='" + this.collection.sortedBy + "']";
    jQuery("nav#encounters-sort li").removeClass("blue-gradient").addClass("grey-gradient");
    jQuery(selector).addClass("blue-gradient").removeClass("grey-gradient");
  }
});
