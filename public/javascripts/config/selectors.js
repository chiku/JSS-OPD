"use strict";
/*jslint white: false, nomen: false */
/*global Application: true */

Application.Configuration.Selectors = {
  main:             'body div[role="main"]',
  appointments:     '#appointments',
  encounters:       '#encounters-container',
  patient:          '#patient-container',
  encountersSort:   '#encounters-sort',
  replaceByTimeago: '.replace-by-timeago',

  templates: {
    encounters:     '#template-encounters',
    encounter:      '#template-encounter',
    patient:        '#template-patient'
  }
};
