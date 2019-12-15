import Backbone from 'backbone';
import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

import { EncountersIndexView } from '../src/views/encounters/index';
import { Router } from '../src/router';

chai.use(sinonChai);

describe('Encounters', () => {
  sinon.spy(EncountersIndexView.prototype, 'attachContentToCleanContainer');
  Backbone.history.start({ silent: true, pushState: true });

  after(() => {
    EncountersIndexView.prototype.attachContentToCleanContainer.restore();
  });

  describe('router', () => {
    const router = new Router();

    afterEach(() => {
      EncountersIndexView.prototype.attachContentToCleanContainer.resetHistory();
    });


    beforeEach(() => {
      router.navigate('elsewhere');
    });

    afterEach(() => {
      router.navigate('');
    });

    it('fires encounters index for "" URL', () => {
      router.navigate('', true);
      expect(EncountersIndexView.prototype.attachContentToCleanContainer).to.have.been.callCount(1);
      expect(EncountersIndexView.prototype.attachContentToCleanContainer).to.have.been.calledWith();
    });

    it('fires encounters index for "encounters.json" URL', () => {
      router.navigate('encounters', true);
      expect(EncountersIndexView.prototype.attachContentToCleanContainer).to.have.been.callCount(1);
      expect(EncountersIndexView.prototype.attachContentToCleanContainer).to.have.been.calledWith();
    });
  });
});
