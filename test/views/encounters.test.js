import { expect } from 'chai';

import { EncounterModel } from '../../src/models/encounter';
import { EncountersCollection } from '../../src/collections/encounters';
import { EncountersIndexView } from '../../src/views/encounters/index';

describe('Encounters index', () => {
  describe('on render', () => {
    let container;

    beforeEach(() => {
      container = window.document.createElement('div');
      container.setAttribute('id', 'encounters-container');
      window.document.querySelector('body').appendChild(container);
    });

    afterEach(() => {
      window.document.querySelector('body').removeChild(container);
    });

    const encounters = new EncountersCollection();

    encounters.add(new EncounterModel({
      patient: { display: 'Patient Name 1' },
      provider: { display: 'Doctor Name 1' },
      encounterDatetime: '2011-12-31T00:00:00.000+0530',
      formattedEncounterDatetime: '5 years ago',
      id: 'a1',
    }));

    encounters.add(new EncounterModel({
      patient: { display: 'Patient Name 2' },
      provider: { display: 'Doctor Name 2' },
      encounterDatetime: '2011-01-31T00:00:00.000+0530',
      formattedEncounterDatetime: '5 years ago',
      id: 'a2',
    }));

    it('has multiple encounter shows', () => {
      new EncountersIndexView({
        collection: encounters,
      }).render();

      const html = container.textContent;
      expect(html).to.include('Patient Name 1');
      expect(html).to.include('Patient Name 2');
      expect(html).to.include('Doctor Name 1');
      expect(html).to.include('Doctor Name 2');
    });

    it('updates when encounters is added', () => {
      new EncountersIndexView({
        collection: encounters,
      }).render();

      encounters.add(new EncounterModel({
        patient: { display: 'Patient Name 3' },
        provider: { display: 'Doctor Name 3' },
        encounterDatetime: '2011-11-31T00:00:00.000+0530',
        formattedEncounterDatetime: '5 years ago',
        id: 'a3',
      }));

      const html = container.textContent;
      expect(html).to.include('Patient Name 3');
      expect(html).to.include('Doctor Name 3');
    });
  });
});
