'use strict';

var kraken = require('kraken-js');
var express = require('express');
var app = express();

app.use(kraken());

app.on('start', function () {
  console.log('Application started.');
});

app.listen(8000, function () {
  console.log('Listening on 8000 ...');
});
