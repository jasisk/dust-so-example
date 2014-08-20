'use strict';

var dust = require('dustjs-linkedin');

module.exports = function (router) {

  router.route('/').get(function (req, res) {
    res.render('index', {whatAmI: 'dust'});
  });

  router.route('/something-else').get(function (req, res, next) {
    dust.render('something-else', {whatAmI: 'dust'}, function (err, compiled) {
      if (err) {
        return next(err);
      }
      res.send(compiled);
    });
  });
};
