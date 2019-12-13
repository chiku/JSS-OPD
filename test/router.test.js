import Backbone from 'backbone';
import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import nock from 'nock';

import { EncountersCollection } from '../src/collections/encounters';
import { PatientsShowView } from '../src/views/patients/show';
import { EncountersIndexView } from '../src/views/encounters/index';
import { Router } from '../src/router';

chai.use(sinonChai);

describe('Encounters', function() {
  sinon.spy(EncountersIndexView.prototype, 'attachContentToCleanContainer');
  Backbone.history.start({ silent: true, pushState: true });

  after(function() {
    EncountersIndexView.prototype.attachContentToCleanContainer.restore();
  });

  describe('router', function() {
    const router = new Router();

    afterEach(function() {
      EncountersIndexView.prototype.attachContentToCleanContainer.resetHistory();
    });


    beforeEach(function() {
      router.navigate('elsewhere');
    });

    afterEach(function() {
      router.navigate('');
    });

    it('fires encounters index for "" URL', function() {
      router.navigate('', true);
      expect(EncountersIndexView.prototype.attachContentToCleanContainer).to.have.been.callCount(1);
      expect(EncountersIndexView.prototype.attachContentToCleanContainer).to.have.been.calledWith();
    });

    it('fires encounters index for "encounters.json" URL', function() {
      router.navigate('encounters', true);
      expect(EncountersIndexView.prototype.attachContentToCleanContainer).to.have.been.callCount(1);
      expect(EncountersIndexView.prototype.attachContentToCleanContainer).to.have.been.calledWith();
    });
  });
});
