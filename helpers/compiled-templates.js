'use strict';

var dust = require('dustjs-linkedin');
var path = require('path');
var vm = require('vm');
var fs = require('fs');

module.exports = function () {
  var source = fs.readFileSync(path.join(__dirname, 'templates.precompiled'));
  var ctx = vm.createContext({ dust: dust });

  vm.runInContext(source, ctx, 'templates.vm');
};
