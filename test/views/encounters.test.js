import { expect } from 'chai';
import nock from 'nock';

import { EncounterModel } from '../../src/models/encounter';
import { EncountersCollection } from '../../src/collections/encounters';
import { EncountersIndexView } from '../../src/views/encounters/index';

describe('Encounters index', function() {
  describe('on render', function() {
    const encounters = new EncountersCollection();

    encounters.add(new EncounterModel({
      patient: { display: 'Patient Name 1' },
      provider: { display: 'Doctor Name 1' },
      encounterDatetime: '2011-12-31T00:00:00.000+0530',
      id: 'a1',
    }));

    encounters.add(new EncounterModel({
      patient: { display: 'Patient Name 2' },
      provider: { display: 'Doctor Name 2' },
      encounterDatetime: '2011-01-31T00:00:00.000+0530',
      id: 'a2',
    }));

    // it('has multiple encounter shows', function() {
    //   const container = jQuery('<div>');
    //   const encounterIndex = new Application.Views.Encounters.Index({
    //     collection: this.encounters,
    //     encounterShowsContainerSelector: container
    //   }).render();

    //   const html = container.html();
    //   expect(html.match('Patient Name 1')).toBeTruthy('Patient Name 1 is absent');
    //   expect(html.match('Patient Name 2')).toBeTruthy('Patient Name 2 is absent');
    //   expect(html.match('Doctor Name 1')).toBeTruthy('Doctor Name 1 is absent');
    //   expect(html.match('Doctor Name 2')).toBeTruthy('Doctor Name 2 is absent');
    // });

    // it('updates when encounters is reset', function() {
    //   const container = jQuery('<div>');

    //   const encounterIndex = new Application.Views.Encounters.Index({
    //     collection: this.encounters,
    //     encounterShowsContainerSelector: container
    //   }).render();

    //   this.encounters.reset(new EncounterModel({
    //     patient: { display: 'Patient Name 3' },
    //     provider: { display: 'Doctor Name 3' },
    //     encounterDatetime: '2011-11-31T00:00:00.000+0530',
    //     id: 'a3'
    //   }));

    //   const html = container.html();
    //   expect(html.match('Patient Name 3')).toBeTruthy('Patient Name 3 is absent');
    //   expect(html.match('Doctor Name 3')).toBeTruthy('Doctor Name 3 is absent');
    // });
  });
});