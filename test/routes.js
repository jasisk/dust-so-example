'use strict';

var supertest = require('supertest');
var kraken = require('kraken-js');
var express = require('express');
var test = require('tape');
var path = require('path');

var app = express();
app.use(kraken(path.resolve(__dirname, '..')));
app.on('start', start);

function start() {
  var request = supertest(app);

  function gotoRoute(route, str, cb) {
    request.get(route).expect(new RegExp(str, 'ig'), cb);
  }

  test('routes', function (t) {

    t.test('/', function (st) {
      gotoRoute('/', 'a dust template', function (err, res) {
        st.error(err);
        st.end();
      });
    });

    t.test('/pre', function (st) {
      gotoRoute('/pre', 'different dust template', function (err, res) {
        st.error(err);
        st.end();
      });
    });

    t.test('/gist', function (st) {
      gotoRoute('/gist', 'DUSTY', function (err, res) {
        st.error(err);
        st.end();
      });
    });

    t.test('/gist/pre', function (st) {
      gotoRoute('/gist/pre', 'DUSTY', function (err, res) {
        st.error(err);
        st.end();
      });
    });
  });
}
