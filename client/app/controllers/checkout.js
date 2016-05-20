import Ember from 'ember';

export default Ember.Controller.extend({
  notifications: Ember.inject.service(),

  actions: {
    notifyOnError() {
      throw new Error('Sample error.');
    },

    send(message, order) {
      this.get('notifications').sendOrderNotification(message, order.id);
    }
  }
});
