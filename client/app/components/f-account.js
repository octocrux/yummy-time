import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    submit() {
      return this.attrs.submit();
    }
  }
});
