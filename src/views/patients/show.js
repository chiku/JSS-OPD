import _ from 'underscore';
import $ from 'jquery';
import Backbone from 'backbone';

export const patientSelector = '#patient-container';

export const PatientsShowView = Backbone.View.extend({
  tagName: 'section',

  className: 'patient',

  template: $(`
<script type="text/template">
  <div class="name"> <%= name() %> </div>
  <div class="age"> Age: <%= age() %> </div>
  <div class="address"> <%= address() %> </div>
  <section class="patient-details">
    <header>Patient History</header>
    <section class="patient-information spacer">
      <p>Some info from the screener to help the doctor or nurse with more information as they scroll through the patient list</p>
    </section>
    <header>Family History</header>
    <section class="patient-information spacer">
      <p>Some info from the screener to help the doctor or nurse with more information as they scroll through the patient list</p>
    </section>
    <header>Social History</header>
    <section class="patient-information spacer">
      <p>Some info from the screener to help the doctor or nurse with more information as they scroll through the patient list</p>
    </section>
    <header>Notes</header>
    <section class="patient-information">
      <p>Some info from the screener to help the doctor or nurse with more information as they scroll through the patient list</p>
    </section>
  </section>
</script>
`).html(),

  initialize() {
    this.model.bind('change', this.attachContentToCleanContainer, this);
  },

  render() {
    const html = _.template(this.template)(this.model);
    $(this.el).html(html);

    return this;
  },

  attachContentToCleanContainer() {
    $(patientSelector)
      .empty()
      .append(this.render().el);

    return this;
  },
});
