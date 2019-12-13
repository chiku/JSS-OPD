const JSDOM = require('jsdom').JSDOM;

const { window } = new JSDOM('<!DOCTYPE html>', {
  url: 'http://localhost',
});

global.window = window;
global.document = window.document;
global.XMLHttpRequest = window.XMLHttpRequest;

const $ = require('jquery');
global.$ = $;

const Backbone = require('backbone');
const BackboneAjax = require('backbone.nativeajax');

Backbone.$ = $;
Backbone.ajax = BackboneAjax;
