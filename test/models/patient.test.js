import { expect } from 'chai';
import nock from 'nock';

import { PatientModel } from '../../src/models/patient';

describe('Patient', function() {
  describe('which is well-formed', function() {
    const patient = new PatientModel({
      id: 'abc123',
      person: {
        age: 36,
        preferredName: { 'display': 'Mr. John D Patient' },
        preferredAddress: { 'display': '555 Johnson Rd.' }
      }
    });

    it('knows its URL from the its ID', function() {
      expect(patient.url()).to.include('/patient/abc123.json');
    });

    it('knows its name from the perferred address', function() {
      expect(patient.name()).to.equal('Mr. John D Patient');
    });

    it('knows its age', function() {
      expect(patient.age()).to.equal(36);
    });

    it('knows its address from the perferred address', function() {
      expect(patient.address()).to.equal('555 Johnson Rd.');
    });
  });

  describe('which is malformed', function() {
    const patient = new PatientModel({
      'attributes': { 'person': {} }
    });

    it('has undefined name', function() {
      expect(patient.name()).to.be.undefined;
    });

    it('has undefined name', function() {
      expect(patient.age()).to.be.undefined;
    });

    it('has undefined address', function() {
      expect(patient.address()).to.be.undefined;
    });
  });

  describe('which is severely malformed', function() {
    const patient = new PatientModel({
      'attributes': {}
    });

    it('has undefined name', function() {
      expect(patient.name()).to.be.undefined;
    });

    it('has undefined name', function() {
      expect(patient.age()).to.be.undefined;
    });

    it('has undefined address', function() {
      expect(patient.address()).to.be.undefined;
    });
  });

  describe('on fetching from server', function() {
    nock('http://localhost')
      .get('/sampleWSResponses/patient/abc123.json')
      .reply(200, JSON.stringify({
        uuid: 'abc123',
        age: 36,
        preferredName: { display: 'Mr. John D Patient' },
        preferredAddress: { display: '555 Johnson Rd.' }
      }), {
        'Content-Type': 'application/json',
      });

    const patient = new PatientModel({ id: 'abc123' });
    patient.fetch();

    after(function() {
      nock.cleanAll();
    })

    it('parses the response', function() {
      expect(patient.get('uuid')).to.equal('abc123');
    });

    it('creates IDs from uuids', function() {
      expect(patient.get('id')).to.equal('abc123');
    });
  });
});
