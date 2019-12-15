import $ from 'jquery';
import Backbone from 'backbone';

export const encountersSortSelector = '#encounters-sort';

export const EncountersSortView = Backbone.View.extend({
  el() {
    return $(encountersSortSelector);
  },

  events: {
    click: 'sortPatients',
  },

  initialize() {
    this.listenTo(this.collection, 'encounter:sort', this.activateSort);
  },

  sortPatients(e) {
    const property = $(e.target).attr('data-sort-by');
    if (!property) {
      return;
    }

    this.collection.reorderBy(property);
  },

  activateSort() {
    const selector = `li[data-sort-by='${this.collection.sortedBy}']`;
    $('nav#encounters-sort li').removeClass('blue-gradient').addClass('grey-gradient');
    $(selector).addClass('blue-gradient').removeClass('grey-gradient');
  },
});
