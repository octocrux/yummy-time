'use strict';

const Commands = require('./commands');

function extractCommand(text) {
  // TODO: refactor code
  if (!text) {
    return Commands.orders();
  } else if (text.includes('help')) {
    return Commands.help();
  } else if (text.includes('orders')) {
    return Commands.orders();
  }
  return Commands.error();
}

exports.callback = function(req, res) {
  if (!req.body) {
    // eslint-disable-next-line no-console
    console.log('Error on parsing request body');
    res.send('Не удалось прочитать команду');
  } else {
    // eslint-disable-next-line no-console
    console.log(req.body);
    const command = extractCommand(req.body.text);
    command.then((commandText) => {
      res.send(commandText);
    });
  }
};
