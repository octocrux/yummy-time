import Ember from 'ember';
import { validator, buildValidations } from 'ember-cp-validations';

const Validations = buildValidations({
  title: {
    validators: [
      validator('presence', true)
    ]
  },
  url: {
    validators: [
      validator('presence', true),
      validator('format', { type: 'url' })
    ]
  },
  minOrderCost: {
    validators: [
      validator('presence', true),
      validator('number', { allowString: true, integer: true, positive: true })
    ]
  }
});

export default Ember.Component.extend(Validations, {
  didValidate: false,

  makeUrl() {
    const urlPattern = /^https?:\/\//;
    const vendorUrl = this.get('url');
    if (!vendorUrl.match(urlPattern)) {
      this.set('url', `http://${vendorUrl}`);
    }
  },

  actions: {
    submit() {
      this.makeUrl();
      this.validate().then(({ validations }) => {
        if (validations.get('isValid')) {
          this.attrs.submit(
            this.getProperties('title', 'url', 'minOrderCost')
          );
        }
        this.set('didValidate', true);
      });
    }
  }
});
