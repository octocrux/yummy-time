'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  time: { type: String, required: true },
  location: { type: String, required: true },
  manager: { ref: 'Account', type: Schema.ObjectId },
  vendor: { ref: 'Vendor', type: Schema.ObjectId },
  portions: [{ ref: 'Portion', type: Schema.ObjectId }],
  active: { type: Boolean, required: true, default: true }
});

module.exports = mongoose.model('Order', orderSchema);
