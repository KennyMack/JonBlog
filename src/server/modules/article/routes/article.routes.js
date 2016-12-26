'use strict';

module.exports = router;

function router(express) {
  let router = express.Router();

  router.get('/', get);

  return router;
};

function get(req, res, next) {
  res.json({
    'name': 'name'
  });
};
