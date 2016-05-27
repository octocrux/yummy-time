'use strict';

const Commands = require('./commands');

function extractCommand(text) {
  if (!text) {
    return 'Error in command text';
  }

  if (text.includes('help')) {
    return Commands.help();
  }
  if (text.includes('orders')) {
    return Commands.orders();
  }
};

exports.callback = function(req, res) {
  if (!req.body) {
    // eslint-disable-next-line no-console
    console.log('Error on parsing request body');
    res.write('Could not parse request body');
    res.end();
  } else {
    // eslint-disable-next-line no-console
    console.log(req.body);
    let command = extractCommand(req.body.text);
    // eslint-disable-next-line no-console
    console.log(command);
    res.send(command);
  }
};
