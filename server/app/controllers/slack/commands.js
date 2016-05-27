'use strict';

exports.help = function() {
  let helpText = '';
  helpText += 'type *\/yummy orders* to get list of Active orders\n';
  helpText += 'type *\/yummy help* to get this message';

  return helpText;
};

exports.orders = function() {
  let ordersText = '';
  ordersText += 'This is a command for getting order list';

  return ordersText;
};
