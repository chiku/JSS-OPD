"use strict";
/*jslint white: false, nomen: false */
/*global Application: true, Backbone: true, _: true, jQuery: true */

jQuery(function() {
  Application.Views.Encounters.Index = Backbone.View.extend({
    tagName: 'section',

    idName: 'appointments',

    template: jQuery(
  '<script type="text/template">\
    <header class="grey-gradient">Patients</header>\
    <section class="content">\
      <nav class="margin-bottom-gutter" id="encounters-filter">\
        <ul>\
          <li class="blue-gradient margin-right-gutter">Today</li>\
          <li class="grey-gradient margin-right-gutter">Pending</li>\
          <li class="grey-gradient">All</li>\
        <ul>\
      </nav>\
      <input type="text" class="search margin-bottom-gutter wide" />\
      <nav class="margin-bottom-gutter" id="encounters-sort">\
        <ul>\
          <li class="grey-gradient margin-right-gutter" data-sort-by="appointmentTime">Time</li>\
          <li class="grey-gradient margin-right-gutter" data-sort-by="providerName">Doctor</li>\
          <li class="blue-gradient margin-right-gutter" data-sort-by="patientName">Name</li>\
          <li class="grey-gradient">Urgency</li>\
        </ul>\
      </nav>\
      <section id="encounters-container"></section>\
    </section>\
  </script>\
').html(),

    initialize: function(options) {
      this.encounterShowsContainerSelector = options.encounterShowsContainerSelector;
      this.collection.bind('reset', this.render, this);

      var sort = new Application.Views.Encounters.Sort({
        collection: this.collection
      });
    },

    render: function() {
      jQuery(this.el).html(_.template(this.template));

      this.collection.each(function(encounter) {
        var view = new Application.Views.Encounters.Show({
          model: encounter
        });
        jQuery(this.encounterShowsContainerSelector).append(view.render().el);
      }, this);

      jQuery(Application.Configuration.Selectors.replaceByTimeago).timeago();
      return this;
    },

    attachContentToCleanContainer: function() {
      jQuery(Application.Configuration.Selectors.appointments)
        .empty()
        .append(this.render().el);

      return this;
    }
  });
});
