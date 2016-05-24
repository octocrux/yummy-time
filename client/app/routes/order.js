import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model(params) {
    return Ember.RSVP.hash({
      order: this.store.findRecord('order', params.order_id),
      portions: this.store.query('portion', {
        filter: { simple: { order: params.order_id, deleted: false } }
      })
    });
  }
});
