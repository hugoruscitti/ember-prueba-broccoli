/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var Funnel = require('broccoli-funnel')
var mergeTrees = require('broccoli-merge-trees')

var TS = require('broccoli-typescript-compiler');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
  });

  var tsTree = new TS('ejercicios', this.options);

  var funnelTree = new Funnel('app', {
    destDir: 'appkit'
  });


  var appTree = app.toTree();

  return mergeTrees([appTree, funnelTree, tsTree]);
};
