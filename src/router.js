import Backbone from 'backbone';

import { encountersCollection } from './collections/encounters';
import { EncountersIndexView } from './views/encounters/index';

export const Router = Backbone.Router.extend({
  routes: {
    '': 'index',
    encounters: 'index',
    'patients/:id': 'show',
  },

  initialize() {
    this.encountersView = new EncountersIndexView({
      collection: encountersCollection,
    });
  },

  index() {
    this.encountersView.attachContentToCleanContainer();
  },

  show() {
  },
});
