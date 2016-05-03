import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  open: false,

  openClass: Ember.computed('open', function() {
    return this.get('open') ? '_open' : '';
  }),

  authClass: Ember.computed('session.isAuthenticated', function() {
    return this.get('session.isAuthenticated') ? '' : '_no-auth';
  }),

  actions: {
    invalidateSession() {
      this.get('session').invalidate();
    },
    slide() {
      this.toggleProperty('open');
    },
    hideMenu() {
      this.set('open', false);
    }
  }

});
