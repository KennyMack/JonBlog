'use strict';
/**
 * Module article
 */

/**
 * Create instance to Article Module
 * @param  {Object} app     Express App instance
 * @param  {Object} express Express
 * @param  {String} url     Path url which module will work
 */
module.exports = function (app, express, url) {
  let article = require('./routes/article.routes')(express);

  app.use(url, article);
};
