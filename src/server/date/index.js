'use strict';

const moment = require('moment');
const config = require('../config');

function getDateTimeNow() {
  return moment().format(config.getDateTimeFormat());
}

function getDateNow() {
  return moment().format(config.getDateFormat());
}
