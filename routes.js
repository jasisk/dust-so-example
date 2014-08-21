'use strict';

var Router = require('express').Router;
var dust = require('dustjs-linkedin');
var model = require('./models/main');

var mainRouter = makeRouter({
  model: { whatAmI: 'dust' }
});

var gistRouter = makeRouter({
  viewNS: 'gist/',
  preNS: 'gist-',
  model: model
});


module.exports = function (router) {
  router.use('/', mainRouter);
  router.use('/gist', gistRouter);
};

function makeRouter(opts) {
  var router = Router();
  router.get('/', function (req, res, next) {
    res.render((opts.viewNS||'') + 'block', opts.model);
  });

  router.get('/pre', function (req, res, next) {
    dust.render((opts.preNS||'') + 'block-pre', opts.model, function (err, compiled) {
      if (err) {
        return next(err);
      }
      res.send(compiled);
    });
  });

  return router;
}
