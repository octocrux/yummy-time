'use strict';

module.exports = {
  db: 'mongodb://localhost/example',
  port: process.env.PORT || 3000,
  originURL: process.env.CLIENT_URL || '127.0.0.1:4200',
  secret: 'secret',
  google: {
    clientID: process.env.GOOGLE_CLIENTID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: process.env.CLIENT_URL || '127.0.0.1:4200'
  },
  smtp: process.env.YUMMY_SMTP
};
