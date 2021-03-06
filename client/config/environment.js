/* jshint node: true */

module.exports = function(environment) {
  const ENV = {
    modulePrefix: 'client',
    environment,
    host: process.env.SERVER_URL,
    hostClient: process.env.CLIENT_URL,
    hostServer: process.env.SERVER_URL,
    baseURL: '/',
    locationType: 'auto',
    namespace: '',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  ENV['ember-simple-auth'] = {
    authorizer: 'authorizer:token',
    authenticationRoute: 'login',
    routeAfterAuthentication: 'orders'
  };

  ENV['ember-simple-auth-token'] = {
    serverTokenEndpoint: `${ENV.hostServer}/auth/token`,
    authorizationPrefix: 'JWT ',
    identificationField: 'email',
    passwordField: 'password'
  };

  ENV.torii = {
    sessionServiceName: 'session',
    providers: {
      'google-oauth2': {
        apiKey: process.env.GOOGLE_CLIENTID,
        redirectUri: ENV.hostClient,
        accessType: 'offline'
      }
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.namespace = 'api/v1';
    ENV.host = ENV.hostClient;
    ENV.airbrake = {
      projectId: process.env.AIRBRAKE_PID,
      projectKey: process.env.AIRBRAKE_PKEY
    };
  }

  return ENV;
};
