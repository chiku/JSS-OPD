import { expect } from 'chai';
import nock from 'nock';

import { PatientModel } from '../../src/models/patient';

describe('Patient', () => {
  describe('which is well-formed', () => {
    const patient = new PatientModel({
      id: 'abc123',
      person: {
        age: 36,
        preferredName: { display: 'Mr. John D Patient' },
        preferredAddress: { display: '555 Johnson Rd.' },
      },
    });

    it('knows its URL from the its ID', () => {
      expect(patient.url()).to.include('/patient/abc123.json');
    });

    it('knows its name from the perferred address', () => {
      expect(patient.name()).to.equal('Mr. John D Patient');
    });

    it('knows its age', () => {
      expect(patient.age()).to.equal(36);
    });

    it('knows its address from the perferred address', () => {
      expect(patient.address()).to.equal('555 Johnson Rd.');
    });
  });

  describe('which is malformed', () => {
    const patient = new PatientModel({
      attributes: { person: {} },
    });

    it('has undefined name', () => {
      expect(patient.name()).to.be.undefined;
    });

    it('has undefined name', () => {
      expect(patient.age()).to.be.undefined;
    });

    it('has undefined address', () => {
      expect(patient.address()).to.be.undefined;
    });
  });

  describe('which is severely malformed', () => {
    const patient = new PatientModel({
      attributes: {},
    });

    it('has undefined name', () => {
      expect(patient.name()).to.be.undefined;
    });

    it('has undefined name', () => {
      expect(patient.age()).to.be.undefined;
    });

    it('has undefined address', () => {
      expect(patient.address()).to.be.undefined;
    });
  });

  describe('on fetching from server', () => {
    nock('http://localhost')
      .get('/sampleWSResponses/patient/abc123.json')
      .reply(200, JSON.stringify({
        uuid: 'abc123',
        age: 36,
        preferredName: { display: 'Mr. John D Patient' },
        preferredAddress: { display: '555 Johnson Rd.' },
      }), {
        'Content-Type': 'application/json',
      });

    const patient = new PatientModel({ id: 'abc123' });
    patient.fetch();

    after(() => {
      nock.cleanAll();
    });

    it('parses the response', () => {
      expect(patient.get('uuid')).to.equal('abc123');
    });

    it('creates IDs from uuids', () => {
      expect(patient.get('id')).to.equal('abc123');
    });
  });
});
