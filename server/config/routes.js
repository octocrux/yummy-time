'use strict';

const passport = require('passport');
const main = require('../app/controllers/main');
const api = require('../app/controllers/api');
const auth = require('../app/controllers/auth');
const slackCommands = require('../app/controllers/slack/slack-commands');

/**
 * Expose routes
 */

module.exports = function applyRoutes(app) {
  app.get('/', main.index);
  app.get('/:type(orders|accounts|portions|vendors)', passport.authenticate('jwt'), api);
  app.get('/:type(orders|accounts|portions|vendors)/:id', passport.authenticate('jwt'), api);

  app.post('/yummy', slackCommands.callback);
  app.post('/auth/token', auth.token);
  app.post('/auth/google-oauth2', auth.google.callback);
  app.post('/:type(accounts)', api);
  app.post('/:type(notifications)', passport.authenticate('jwt'), api);
  app.post('/:type(orders|portions|vendors)', passport.authenticate('jwt'), api);

  app.patch('/:type(orders|portions|accounts)/:id', passport.authenticate('jwt'), api);
};
