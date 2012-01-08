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
      $.ajax({
                type : "GET",
                url : Application.Configuration.Urls.patients,
                dataType : "json",
                success: function(result) {
                          that.model = result;
                          var html = _.template(that.template)(that.model);
                          jQuery(that.el).html(html);
                         },
                error : function() {
                          alert("error")
                         }
              });
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
