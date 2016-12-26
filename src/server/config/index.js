'use strict';

const fs = require('fs');

// return default port
function getPort() {
  let port = process.env.PORT || 3000;

  if (isNaN(port)) {
    return 3000;
  }

  return port;
}

// return mongo url
function getDbUrl() {
  return process.env.MONGO_DB || 'mongodb://localhost:27017/jonblog';
}

// return default date format
function getDateFormat() {
  return process.env.DATE_FORMAT || 'DD/MM/YYYY';
}

// return default date time format
function getDateTimeFormat() {
  return process.env.DATE_TIME_FORMAT || 'DD/MM/YYYY HH:mm:ss';
}

// return secret key
function getSecret() {
  return process.env.SECRET || '123456';
}

// load env vars
function loadEnv() {
  return new Promise(function(resolve, reject) {
    let path = require('path');
    let local = path.dirname(module.parent.filename);
    local = path.resolve(path.join(local, '../'));
    fs.readFile(local + '/.env', 'utf-8', function(err, data) {
      if (err) {
        reject(err);
      }
      else {
        let rows = data.split(/\r?\n/);

        for (let i = 0, len = rows.length; i < len; i++) {
          let keyValue = rows[i].split('=');
          process.env[keyValue[0]] = keyValue[1];
        }

        resolve('Variáveis de ambiente carregadas.');
      }
    });
  });
}

module.exports = {
  loadEnv: loadEnv,
  getPort: getPort,
  getDbUrl: getDbUrl,
  getDateFormat: getDateFormat,
  getDateTimeFormat: getDateTimeFormat,
  getSecret: getSecret
};
