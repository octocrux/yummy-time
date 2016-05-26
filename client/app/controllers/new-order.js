import Ember from 'ember';

export default Ember.Controller.extend({
  messageConstructor: Ember.inject.service('message-constructor'),

  createNotification(order, account) {
    const message = this.get('messageConstructor').slackOrderCreated(order);

    const notification = this.store.createRecord('notification');
    notification.set('order', order);
    notification.set('manager', account);
    notification.set('text', message);
    notification.save();
  },

  actions: {
    createOrder(vendor, account, attrs) {
      const order = this.store.createRecord('order', attrs);
      order.set('vendor', vendor);
      order.set('manager', account);
      order.set('money.required', vendor.get('minOrderCost'));
      order.save().then(() => {
        this.createNotification(order, account);
      });

      this.transitionToRoute('orders');
    }
  }
});
