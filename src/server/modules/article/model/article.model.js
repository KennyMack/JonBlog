'use strict';
/**
 * Module article
 */

/**
 * Dependencies
 */
const core = require('../../core');
const articleSchema = require('../config/article.schema');

const db = core.connection;
const config = core.config;
const articleModel = db.database.model('articles', articleSchema);

/**
 * Change modified_at field before save
 * @param  {model}   model Model which has to be updated
 * @param  {Function} next  next operation save/update
 */
function preUpdate(model, next) {
  model.modified_at = config.getDateTimeNow();
}

/**
 * Exec before save
 */
articleSchema.pre('save', function (next) {
  preUpdate(this, next);
});

/**
 * Exec before update
 */
articleSchema.pre('update', function (next) {
  preUpdate(this._update['$set'], next);
});

/**
 * Insert in DB
 * @param  {Object} article Article object
 * @return {Promise}        Resolve/Reject
 */
function insert(article) {
  return new articleModel(article)
    .save();
}

/**
 * Update in DB
 * @param  {ObjectId} id id which has to be updated
 * @param  {Object} article Article object
 * @return {Promise}        Resolve/Reject
 */
function update(id, article) {
  let query = {
    _id: db.getObjectId(id)
  };
  let opt = {
    upsert: false,
    new: true
  }
  return articleModel
    .findOneAndUpdate(query, article, opt)
    .exec()
}

/**
 * Delete in DB
 * @param  {ObjectId} id id which has to be deleted
 * @return {Promise}        Resolve/Reject
 */
function remove(id) {
  return articleModel.findByIdAndRemove(id)
    .exec();
}

/**
 * List all register in DB
 * @return {Promise} Resolve/Reject
 */
function list() {
  return articleModel.find()
    .exec();
}

/**
 * List the record in the DB that has the specified ObjectId
 * @param  {ObjectId} id id which has to be listed
 * @return {Promise} Resolve/Reject
 */
function findById(id) {
  return articleModel.findById(id)
    .exec();
}

/**
 * Module Export
 * @type {Object}
 */
module.exports = {
  insert: insert,
  update: update,
  remove: remove,
  list: list,
  findById: findById
};
