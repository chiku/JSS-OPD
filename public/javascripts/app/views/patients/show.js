"use strict";
/*jslint white: false, nomen: false */
/*global Application: true, Backbone: true, _: true, jQuery: true */

jQuery(function() {
  Application.Views.Patients.Show = Backbone.View.extend({
    tagName: 'section',

    className: 'patient',

    template: jQuery('\
  <script type="text/template">\
    <div class="name"> <%= name() %> </div>\
    <div class="age"> Age: <%= age() %> </div>\
    <div class="address"> <%= address() %> </div>\
    <section class="patient-details">\
      <header>Patient History</header>\
      <section class="patient-information spacer">\
        <p>Some info from the screener to help the doctor or nurse with more information as they scroll through the patient list</p>\
      </section>\
      <header>Family History</header>\
      <section class="patient-information spacer">\
        <p>Some info from the screener to help the doctor or nurse with more information as they scroll through the patient list</p>\
      </section>\
      <header>Social History</header>\
      <section class="patient-information spacer">\
        <p>Some info from the screener to help the doctor or nurse with more information as they scroll through the patient list</p>\
      </section>\
      <header>Notes</header>\
      <section class="patient-information">\
        <p>Some info from the screener to help the doctor or nurse with more information as they scroll through the patient list</p>\
      </section>\
    </section>\
  </script>\
').html(),

    initialize: function(options) {
      this.model.bind('change', this.attachContentToCleanContainer, this);
    },

    render: function() {
      var html = _.template(this.template)(this.model);
      jQuery(this.el).html(html);

      return this;
    },

    attachContentToCleanContainer: function() {
      jQuery(Application.Configuration.Selectors.patient)
        .empty()
        .append(this.render().el);

      return this;
    }
  });
});
