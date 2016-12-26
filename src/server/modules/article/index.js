'use strict';

module.exports = function (app, express, url) {
  let article = require('./routes/article.routes')(express);

  app.use(url, article);
};
