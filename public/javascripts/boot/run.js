"use strict";
/*jslint white: false, nomen: false */
/*global Application: true, Backbone: true, _: true, jQuery: true */

jQuery(function() {
  var selectors     = Application.Configuration.Selectors,
      mainContainer = jQuery(selectors.main);

  jQuery('<section>', { 'id': selectors.appointments.replace('#', '')}).appendTo(mainContainer);
  jQuery('<section>', { 'id': selectors.patient.replace('#', '')}).appendTo(mainContainer);

  Application.initialize();
});
