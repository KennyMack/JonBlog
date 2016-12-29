'use strict';
/**
 * Module article
 */


/**
 * Dependencies
 */
import core from '../core';
const date = core.date;
const db = core.connection;

/**
 * Article Schema Definition
 * @type {Schema}
 */
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

/**
 * Module Export
 * @type {Object}
 */
module.exports.articleSchema = articleSchema;
