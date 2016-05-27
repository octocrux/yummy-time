'use strict';

const Order = require('../../models/order');
const Messages = require('./messages');

exports.error = function() {
  let errorText = 'Команда не распознана. Введите */yummy help* \n';
  errorText += 'для отображения списка доступных комманд';

  return new Promise((resolve) => {
    resolve(errorText);
  });
};

exports.help = function() {
  let helpText = '';
  helpText += '*/yummy orders* - получить список активных заказов\n';
  helpText += '*/yummy help* - получить список доступных комманд';

  return new Promise((resolve) => {
    resolve(helpText);
  });
};

exports.orders = function() {
  return Order.find({ active: true }).populate('manager vendor').exec()
    .then(orders => orders.map(order => Messages.orderInfo(order)).join(''))
    .then(message => 'Активные заказы:\n'.concat(message));
};
