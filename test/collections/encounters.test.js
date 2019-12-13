import { expect } from 'chai';
import nock from 'nock';

import { EncounterModel } from '../../src/models/encounter';
import { EncountersCollection } from '../../src/collections/encounters';

describe('Encounters collection', function() {
  it('has the URL to fetch encounters from', function() {
    const encounters = new EncountersCollection();
    expect(encounters.url()).to.include('/encounter.json');
  });

  describe('is ordered', function() {
    const encounterOne = new EncounterModel({
      patient: { display: 'Xyz Abc' },
      provider: { display: 'Doctor A' },
      id: 'a2',
      encounterDatetime: '2011-12-31T12:00:00.000+0530'
    });
    const encounterTwo = new EncounterModel({
      patient: { display: 'Abc Xyz' },
      provider: { display: 'Doctor C' },
      id: 'a3',
      encounterDatetime: '2011-12-31T10:00:00.000+0530'
    });
    const encounterThree = new EncounterModel({
      patient: { display: 'ABc' },
      provider: { display: 'Doctor B' },
      id: 'a1',
      encounterDatetime: '2011-12-31T14:00:00.000+0530'
    });
    const encounters = new EncountersCollection();
    encounters.add([encounterOne, encounterTwo, encounterThree]);

    it('by patient name be default', function() {
      expect(encounters.sortedBy).to.equal('patientName');
      expect(encounters.at(0)).to.equal(encounterThree);
      expect(encounters.at(1)).to.equal(encounterTwo);
      expect(encounters.at(2)).to.equal(encounterOne);
    });

    describe('on a re-order', function() {
      it('by provider name', function() {
        encounters.reorderBy('providerName');
        expect(encounters.sortedBy).to.equal('providerName');
        expect(encounters.at(0)).to.equal(encounterOne);
        expect(encounters.at(1)).to.equal(encounterThree);
        expect(encounters.at(2)).to.equal(encounterTwo);
      });

      it('by patient name', function() {
        encounters.reorderBy('patientName');
        expect(encounters.sortedBy).to.equal('patientName');
        expect(encounters.at(0)).to.equal(encounterThree);
        expect(encounters.at(1)).to.equal(encounterTwo);
        expect(encounters.at(2)).to.equal(encounterOne);
      });

      it('by appointment time', function() {
        encounters.reorderBy('appointmentTime');
        expect(encounters.sortedBy).to.equal('appointmentTime');
        expect(encounters.at(0)).to.equal(encounterTwo);
        expect(encounters.at(1)).to.equal(encounterOne);
        expect(encounters.at(2)).to.equal(encounterThree);
      });

      it('by the pre-existing order on order by incorrect fields', function() {
        encounters.reorderBy('providerName');
        encounters.reorderBy('BadField');
        encounters.reorderBy('VeryBadField');
        expect(encounters.sortedBy).to.equal('providerName');
        expect(encounters.at(0)).to.equal(encounterOne);
        expect(encounters.at(1)).to.equal(encounterThree);
        expect(encounters.at(2)).to.equal(encounterTwo);
      });
    });

    it('after multiple re-orders', function() {
      encounters.reorderBy('providerName').reorderBy('patientName');
      expect(encounters.sortedBy).to.equal('patientName');
      expect(encounters.at(0)).to.equal(encounterThree);
      expect(encounters.at(1)).to.equal(encounterTwo);
      expect(encounters.at(2)).to.equal(encounterOne);
    });
  });

  describe('on fetching from server', function() {
    nock('http://localhost')
      .get('/sampleWSResponses/encounter.json')
      .reply(200, JSON.stringify({
        results: [{
            patient: { display: 'Patient Name 1' },
            provider: { display: 'Doctor Name 1' },
            encounterDatetime: '2011-12-31T00:00:00.000+0530',
            uuid: 'a1'
          },
          {
            patient: { display: 'Patient Name 2' },
            provider: { display: 'Doctor Name 2' },
            encounterDatetime: '2012-01-31T00:00:00.000+0530',
            uuid: 'a2'
          }
        ]
      }), {
        'Content-Type': 'application/json',
      });

    const encounters = new EncountersCollection();
    encounters.fetch();

    after(function() {
      nock.cleanAll();
    });

    it('parses the response', function() {
      expect(encounters).to.have.length(2);
    });

    it('creates IDs from UUIDs', function() {
      expect(encounters.get('a1').get('patient').display).to.equal('Patient Name 1');
      expect(encounters.get('a2').get('patient').display).to.equal('Patient Name 2');
    });
  });
});
