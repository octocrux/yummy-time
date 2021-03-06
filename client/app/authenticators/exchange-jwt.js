import Ember from 'ember';
import ENV from '../config/environment';
import TokenAuthenticator from 'ember-simple-auth-token/authenticators/jwt';

export default TokenAuthenticator.extend({
  ajax: Ember.inject.service(),

  authenticate(provider, data) {
    const ajax = this.get('ajax');

    return ajax.request(`${ENV.hostServer}/auth/${provider}`, {
      type: 'POST',
      dataType: 'json',
      data: { code: data.authorizationCode }
    }).then((res) => res);
  }
});
