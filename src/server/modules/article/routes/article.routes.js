'use strict';
/**
 * Module article
 */

/**
 * Dependencies
 */
const modelArticle = require('../model/article.model');

/**
 * Create Instance to router object
 * @param  {Object} express Express
 * @return {Router}         router object with the routes
 */
function router(express) {
  let router = express.Router();

  router.get('/', get);
  router.post('/', post);

  return router;
};

/**
 * Method Get in route /
 * @param  {Object}   req  request object
 * @param  {Object}   res  response object
 * @param  {Function} next next operation
 */
function get(req, res, next) {

  modelArticle.list()
    .then(function (data) {
      res.json({
        'data': data
      });
    })
    .catch(function (err) {
      res.json({
        'err': err
      });
    });


}

function post(req, res, next) {
  res.json({
    'body': res.body
  });
}

/**
 * Module Export
 * @type {Object}
 */
module.exports = router;
