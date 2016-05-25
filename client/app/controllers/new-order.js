import Ember from 'ember';

export default Ember.Controller.extend({
  createNotification(order) {
    const message = 'New order created!';

    const notification = this.store.createRecord('notification');
    notification.set('order', order);
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
        this.createNotification(order);
      });

      this.transitionToRoute('orders');
    }
  }
});
