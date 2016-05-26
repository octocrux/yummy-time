import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    logClick(targetUrl) {
      window.location.replace(targetUrl);
    }
  }
});
