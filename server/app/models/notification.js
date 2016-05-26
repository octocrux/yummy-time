'use strict';

const Slack = require('node-slack');
const mongoose = require('mongoose');
const Account = require('./account');
const Schema = mongoose.Schema;

const notificationSchema = new Schema({
  text: { type: String, required: true },
  manager: { ref: 'Account', type: Schema.ObjectId },
  order: { ref: 'Order', type: Schema.ObjectId }
});

notificationSchema.pre('save', function(next) {
  Account.findOne({ _id: this.manager })
  .exec((err, manager) => {
    if (err) {
      // eslint-disable-next-line no-console
      console.log('Account not found');
    } else {
      // eslint-disable-next-line no-console
      console.log('Manager name: ', manager.name);
    }
  });

  const slack = new Slack(process.env.SLACK_WEBHOOK);

  slack.send({
    text: this.text,
    channel: '#yummy-channel',
    username: 'YummyBot' });

  next();
});

module.exports = mongoose.model('Notification', notificationSchema);
