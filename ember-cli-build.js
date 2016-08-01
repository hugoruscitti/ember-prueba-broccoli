/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var Funnel = require('broccoli-funnel')
var mergeTrees = require('broccoli-merge-trees')

var TS = require('broccoli-typescript-compiler');


var shell = require('broccoli-shell');


module.exports = function(defaults) {
  //var app = new EmberApp(defaults, {
  //});

  //var tsTree = new TS('ejercicios', this.options);

  //var funnelTree = new Funnel('app', {
  //  destDir: 'appkit'
  //});

  var shellTree = shell(['ejercicios'], {
    command: function(outputPath) {
      console.log("");
      return 'tsc ejercicios/file.ts; echo ' + outputPath;
    },
    pwd: __dirname
  });



  //var appTree = app.toTree();

  return mergeTrees([/*appTree, funnelTree, */shellTree]);
};
