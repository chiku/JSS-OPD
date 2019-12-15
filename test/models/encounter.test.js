import { expect } from 'chai';

import { EncounterModel } from '../../src/models/encounter';

describe('Encounter', () => {
  describe('which is well-formed', () => {
    const encounter = new EncounterModel({
      patient: { display: 'Xyz Abc', uuid: 'abc123' },
      provider: { display: 'Doctor A' },
      id: 'a2',
      encounterDatetime: '2011-12-31T12:00:00.000+0530',
    });

    it('knows the ID of the patient', () => {
      expect(encounter.patientId()).to.eql('abc123');
    });

    it('knows the name of the patient', () => {
      expect(encounter.patientName()).to.eql('Xyz Abc');
    });

    it('knows the name of the provider', () => {
      expect(encounter.providerName()).to.eql('Doctor A');
    });

    it('knows appointment-time from the encounter date-time', () => {
      expect(encounter.appointmentTime()).to.eql('2011-12-31T12:00:00.000+0530');
    });
  });

  describe('which is malformed', () => {
    const encounter = new EncounterModel({
      patient: { random: 'Xyz Abc' },
      noProvider: { display: 'Doctor A' },
      id: 'a2',
    });

    it('has undefined patient ID', () => {
      expect(encounter.patientId()).to.be.undefined;
    });

    it('has undefined patient name', () => {
      expect(encounter.patientName()).to.be.undefined;
    });

    it('has undefined provider name', () => {
      expect(encounter.providerName()).to.be.undefined;
    });

    it('knows undefined appointment-time', () => {
      expect(encounter.appointmentTime()).to.be.undefined;
    });
  });
});
