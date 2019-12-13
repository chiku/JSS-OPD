import Backbone from 'backbone';

export const EncounterModel = Backbone.Model.extend({
  patientId() {
    return this.patient().uuid;
  },

  patientName() {
    return this.patient().display;
  },

  providerName() {
    return this.provider().display;
  },

  appointmentTime() {
    return this.get('encounterDatetime');
  },

  patient() {
    return this.get('patient') || {};
  },

  provider() {
    return this.get('provider') || {};
  },
});
