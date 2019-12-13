import Backbone from 'backbone';
import { extension as urlExtension, patients as patientsUrl } from '../config/urls';

const blankPerson = {
  preferredName: { display: undefined },
  preferredAddress: { display: undefined },
};

export const PatientModel = Backbone.Model.extend({
  url() {
    return `${patientsUrl}/${this.get('id')}.${urlExtension}`;
  },

  parse(response) {
    response.id = response.uuid;
    return response;
  },

  person() {
    const person = this.get('person') || blankPerson;
    person.preferredName = person.preferredName || blankPerson.preferredName;
    person.preferredAddress = person.preferredAddress || blankPerson.preferredAddress;
    return person;
  },

  name() {
    return this.person().preferredName.display;
  },

  age() {
    return this.person().age;
  },

  address() {
    return this.person().preferredAddress.display;
  },
});
