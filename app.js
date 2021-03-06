import Backbone from 'backbone';
import BackboneAjax from 'backbone.nativeajax';

import { Router } from './src/router';
import { encountersCollection } from './src/collections/encounters';

import { patientSelector } from './src/views/patients/show';
import { appointmentsSelector } from './src/views/encounters/index';

import './src/stylesheets/style.css';
import './src/stylesheets/main.css';

Backbone.ajax = BackboneAjax;

const mainSelector = 'body div[role="main"]';

const appointmentsSection = document.createElement('section');
appointmentsSection.setAttribute('id', appointmentsSelector.replace('#', ''));

const patientSection = document.createElement('section');
patientSection.setAttribute('id', patientSelector.replace('#', ''));

const mainContainer = document.querySelector(mainSelector);
mainContainer.append(appointmentsSection);
mainContainer.append(patientSection);

new Router();
Backbone.history.start();
encountersCollection.fetch();
