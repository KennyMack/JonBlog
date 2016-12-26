'use strict';

const db = require('../../connection');
const date = require('../../date');

const articleSchema = new db.mongoose.Schema({
  username: {
    type: db.types.ObjectId,
    ref: 'users',
    required: true,
    index: true
  },
  create_at: {
    type: Date,
    required: true,
    default: date.getDateTimeNow()
  },
  modified_at: {
    type: Date,
    required: true,
    default: date.getCurrentDateTime()
  },
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  checksum: {
    type: String,
    required: true
  }
});

module.exports.articleSchema = articleSchema;
