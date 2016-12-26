'use strict';

const articleSchema = require('../config/articleSchema');
const db = require('../../connection');
const config = require('../../config');
const articleModel = db.database.model('articles', articleSchema);

function preUpdate(model, next) {
  model.modified_at = config.getDateTimeNow();
}

articleSchema.pre('save', function (next) {
  preUpdate(this, next);
});

articleSchema.pre('update', function (next) {
  preUpdate(this._update['$set'], next);
});

function insert(article) {
  return new articleModel(article)
    .save();
}

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

function delete(id) {
  return articleModel.findByIdAndRemove(id)
    .exec();
}

function list() {
  return articleModel.find()
    .exec();
}

function findById(id) {
  return articleModel.findById(id)
    .exec();
}
