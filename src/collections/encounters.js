import _ from 'underscore';
import Backbone from 'backbone';

import { extension as urlExtension, encounters as encountersUrl } from '../config/urls';
import { EncounterModel } from '../models/encounter';

const allowedReorderOn = function (field) {
  return _(['patientName', 'providerName', 'appointmentTime']).include(field);
};

export const EncountersCollection = Backbone.Collection.extend({
  model: EncounterModel,

  url() {
    return `${encountersUrl}.${urlExtension}`;
  },

  initialize() {
    this.sortedBy = 'patientName';
  },

  parse(response) {
    const encounters = response.results;
    _(encounters).each((encounter) => {
      encounter.id = encounter.uuid;
    });

    return encounters;
  },

  comparator(encounter) {
    return encounter.patientName();
  },

  reorderBy(field) {
    if (!allowedReorderOn(field)) {
      return this;
    }

    this.comparator = function (encounter) {
      return encounter[field]();
    };

    this.sortedBy = field;
    this.sort();

    this.trigger('encounter:sort', field);
    return this;
  },
});

export const encountersCollection = new EncountersCollection();
