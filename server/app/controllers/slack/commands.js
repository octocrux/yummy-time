'use strict';

exports.error = function() {
  let errorText = 'Wrong command. Type */yummy help* \n';
  errorText += 'to see the list of available commands';

  return new Promise((resolve) => {
    resolve(errorText);
  });
};

exports.help = function() {
  let helpText = '';
  helpText += 'type */yummy orders* to get list of Active orders\n';
  helpText += 'type */yummy help* to get this message';

  return new Promise((resolve) => {
    resolve(helpText);
  });
};

exports.orders = function() {
  let ordersText = '';
  ordersText += 'This is a command for getting order list';

  return new Promise((resolve) => {
    resolve(ordersText);
  });
};
