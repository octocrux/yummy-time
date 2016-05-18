import Ember from 'ember';
import { groupBy } from '../helpers/group-by';

export default Ember.Component.extend({
  nonDeletedPortions: Ember.computed.filterBy('order.portions', 'deleted', false),
  groupedPortions: Ember.computed('nonDeletedPortions', function() {
    return groupBy(this.get('nonDeletedPortions'), 'owner.id');
  }),
  notifications: Ember.inject.service(),

  actions: {
    toggleActiveState() {
      const order = this.get('order');
      order.toggleProperty('active');
      order.save();
    },

    send(message, order) {
      Ember.Logger.log(message, order);
      this.get('notifications').sendOrderNotification(message, order.id);
    }
  }
});
