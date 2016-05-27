'use strict';

const config = require('../../../config/config');

exports.orderInfo = function(order) {
  let info = '';

  if (order.manager && order.manager.name) {
    info += `${order.manager.name} заказывает `;
  }
  if (order.vendor) {
    info += `в <${order.vendor.url}|${order.vendor.title}> `;
  }
  info += `в <${config.originURL}/orders/${order._id}|${order.time}>\n`;
  return info;
};
