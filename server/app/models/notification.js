'use strict';

const Slack = require('node-slack');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const notificationSchema = new Schema({
  text: { type: String, required: true },
  manager: { ref: 'Account', type: Schema.ObjectId },
  order: { ref: 'Order', type: Schema.ObjectId }
});

notificationSchema.pre('save', function(next) {
  const slack = new Slack(process.env.SLACK_WEBHOOK);

  slack.send({
    text: this.text,
    channel: '#yummy-channel',
    username: 'YummyBot' });

  next();
});

module.exports = mongoose.model('Notification', notificationSchema);
