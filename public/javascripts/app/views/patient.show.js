"use strict";
/*jslint white: false, nomen: false */
/*global Application: true, Backbone: true, _: true, jQuery: true */

jQuery(function() {
  Application.Views.Patients.Show = Backbone.View.extend({
    tagName: 'section',

    className: 'patient',

    template: jQuery(Application.Configuration.Selectors.templates.patient).html(),

    initialize: function(options) {
      this.model.bind('change', this.attachContentToCleanContainer, this);
    },

    render: function() {
      var that = this, viewModel, html;
      this.model.fetch();
      html = _.template(that.template)(this.model);
      jQuery(that.el).html(html);
      
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
