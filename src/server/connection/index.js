'use strict';

const mongoose   = require('mongoose');
const config     = require('../config');
mongoose.Promise = global.Promise;

function open() {
  return new Promise(function (resolve, reject) {
    mongoose.connect(config.getDbUrl(), {})
      .then(function () {
        resolve(mongoose.connection);
      })
      .catch(function (err) {
        reject({
          errno: -1945,
          message: err.message
        });
      });
  });
}

function getObjectId(id) {
  return mongoose.Types.ObjectId(id);
}

module.exports = {
  mongoose: mongoose,
  types: mongoose.Schema.Types,
  open: open,
  database: mongoose.connection,
  getObjectId: getObjectId
};
