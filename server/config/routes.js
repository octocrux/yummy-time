'use strict';

const main = require('../app/controllers/main');
const api = require('../app/controllers/api');

/**
 * Expose routes
 */

module.exports = function(app) {
  app.get('/', main.index);
  app.get('/:type(orders)', api);
  app.get('/:type(orders)/:id', api);
  app.post('/:type(orders)', api);
}
