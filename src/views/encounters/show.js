import _ from 'underscore';
import $ from 'jquery';
import Backbone from 'backbone';

import { PatientModel } from '../../models/patient';
import { PatientsShowView } from '../patients/show';

export const EncountersShowView = Backbone.View.extend({
  tagName: 'section',

  className: 'encounter',

  events: {
    click: 'showPatient',
  },

  template: $(`
<script type="text/template">
  <section class="grey-gradient margin-bottom-gutter">
    <img src="images/thumbnail.png" />
    <section class="encounter-container">
      <div class="patient"> <%= patient.display %> </div>
      <div class="provider"> <%= provider.display %> </div>
      <span>
        <span class="number">411</span>
        <span class="time"><%= formattedEncounterDatetime %></span>
      </span>
    </section>
  </li>
</script>
`).html(),

  initialize() {
    this.model.bind('change', this.render, this);
    this.patient = new PatientModel({ id: this.model.get('patient').uuid });
    this.patientView = new PatientsShowView({
      model: this.patient,
    });
  },

  render() {
    const patientHtml = _.template(this.template)(this.model.toJSON());
    $(this.el).html(patientHtml);

    return this;
  },

  showPatient() {
    this.patient.fetch();
  },
});
