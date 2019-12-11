"use strict";
/*jslint white: false, nomen: false */
/*global Application: true, Backbone: true, _: true, jQuery: true */

jQuery(function() {
  Application.Views.Encounters.Show = Backbone.View.extend({
    tagName: 'section',

    className: 'encounter',

    events: {
      'click': 'showPatient'
    },

    template: jQuery('\
  <script type="text/template">\
    <section class="grey-gradient margin-bottom-gutter">\
      <img src="images/thumbnail.png" />\
      <section class="encounter-container">\
        <div class="patient"> <%= patient.display %> </div>\
        <div class="provider"> <%= provider.display %> </div>\
        <span>\
          <span class="number">411</span>\
          <span class="time replace-by-timeago" title="<%= encounterDatetime %>" ></span>\
        </span>\
      </section>\
    </li>\
  </script>\
').html(),

    initialize: function(options) {
      this.model.bind('change', this.render, this);
      this.patient = new Application.Models.Patient({id: this.model.get('patient').uuid});
      this.patientView = new Application.Views.Patients.Show({
        model: this.patient
      });
    },

    render: function() {
      var patientHtml = _.template(this.template)(this.model.toJSON());
      jQuery(this.el).html(patientHtml);

      return this;
    },

    showPatient: function() {
      this.patient.forceFetch();
    }
  });
});
