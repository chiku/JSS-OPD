"use strict";
/*jslint white: false, nomen: false */
/*global Application: true, Backbone: true, _: true, jQuery: true */

jQuery(function() {
  Application.Views.Encounters.Show = Backbone.View.extend({
    tagName: 'section',

    className: 'encounter',

    events: {
      'click': 'showDetails'
    },

    template: jQuery(Application.Configuration.Selectors.templates.encounter).html(),

    initialize: function(options) {
      this.model.bind('change', this.render, this);
      this.patient = new Application.Models.Patient({id: this.model.id});
      this.patientView = new Application.Views.Patients.Show({
        model: this.patient
      });
    },

    render: function() {
      var patientHtml = _.template(this.template)(this.model.toJSON());
      jQuery(this.el).html(patientHtml);

      return this;
    },

    showDetails: function() {
      this.patientView.attachContentToCleanContainer();
    }
  });
});
