import _ from 'underscore';
import Backbone from 'backbone';
import $ from 'jquery';

import { EncountersShowView } from './show';
import { EncountersSortView } from './sort';

const encounterShowsContainerSelector = '#encounters-container';
const replaceByTimeagoSelector = '.replace-by-timeago';
export const appointmentsSelector = '#appointments';

export const EncountersIndexView = Backbone.View.extend({
  tagName: 'section',

  idName: 'appointments',

  template: $(
    `<script type="text/template">
  <header class="grey-gradient">Patients</header>
  <section class="content">
    <nav class="margin-bottom-gutter" id="encounters-filter">
      <ul>
        <li class="blue-gradient margin-right-gutter">Today</li>
        <li class="grey-gradient margin-right-gutter">Pending</li>
        <li class="grey-gradient">All</li>
      <ul>
    </nav>
    <input type="text" class="search margin-bottom-gutter wide" />
    <nav class="margin-bottom-gutter" id="encounters-sort">
      <ul>
        <li class="grey-gradient margin-right-gutter" data-sort-by="appointmentTime">Time</li>
        <li class="grey-gradient margin-right-gutter" data-sort-by="providerName">Doctor</li>
        <li class="blue-gradient margin-right-gutter" data-sort-by="patientName">Name</li>
        <li class="grey-gradient">Urgency</li>
      </ul>
    </nav>
    <section id="encounters-container"></section>
  </section>
</script>
`,
  ).html(),

  initialize(options) {
    this.listenTo(this.collection, 'add', this.render);
    this.listenTo(this.collection, 'remove', this.render);
    this.listenTo(this.collection, 'change', this.render);
    this.listenTo(this.collection, 'sort', this.render);
  },

  render() {
    $(this.el).html(_.template(this.template));

    this.collection.each((encounter) => {
      const view = new EncountersShowView({
        model: encounter,
      });
      $(encounterShowsContainerSelector).append(view.render().el);
    }, this);

    new EncountersSortView({
      collection: this.collection,
    });

    return this;
  },

  attachContentToCleanContainer() {
    $(appointmentsSelector)
      .empty()
      .append(this.render().el);

    return this;
  },
});
