'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const notificationSchema = new Schema({
  text: { type: String },
  order: { ref: 'Order', type: Schema.ObjectId }
});

module.exports = mongoose.model('Notification', notificationSchema);
