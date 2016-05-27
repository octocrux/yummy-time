'use strict';

const Order = require('../../models/order');

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
    .then(orders => orders.map(order => `Заказ в ${order.time}`).join(''))
    .then(message => 'Активные заказы:\n'.concat(message));
};
