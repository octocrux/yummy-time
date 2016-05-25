import Ember from 'ember';
import ENV from '../config/environment';

export default Ember.Service.extend({
  slackOrderCreated(order) {
    const id = order.id;
    const vendor = order.get('vendor.title');
    const vendorUrl = order.get('vendor.url');
    const time = order.get('time');
    let message = '';

    message += `Создан новый заказ на ${time} в <${vendorUrl}|${vendor}>\n`;
    message += 'Можно присоединиться здесь:\n';
    message += `${ENV.hostClient}/orders/${id}`;

    return message;
  }
});
