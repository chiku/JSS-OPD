"use strict";
/*jslint white: false, nomen: false */
/*global Application: true, Backbone: true, _: true, jQuery: true */

jQuery(function() {
  Application.Views.Patients.Show = Backbone.View.extend({
    tagName: 'ul',

    className: 'patient',

    template: jQuery(Application.Configuration.Selectors.templates.patient).html(),

    initialize: function(options) {
      this.model.bind('change', this.attachContentToCleanContainer, this);
    },

    render: function() {
      var that = this;
      this.model.fetch({
            success: function(model, resp) {
                var viewModel = {Name: model.Name(), 
                                 Address: model.Address(), 
                                 Age: model.Age()};
                var html = _.template(that.template)(viewModel);
                jQuery(that.el).html(html);
            }
            }
        )
      
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
