'use strict';

module.exports = {
  db: `mongodb://${process.env.YUMMY_USER}:${process.env.YUMMY_PASSWORD}@${process.env.YUMMY_DB}`,
  port: process.env.PORT,
  originURL: process.env.CLIENT_URL,
  secret: process.env.SECRET,
  google: {
    clientID: process.env.GOOGLE_CLIENTID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: process.env.CLIENT_URL
  },
  smtp: process.env.YUMMY_SMTP,
  systemEmail: process.env.SYSTEM_EMAIL
};
