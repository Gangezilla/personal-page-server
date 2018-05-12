const express = require('express');
const logger = require('./config/logger');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static('build'));

app.use(helmet());

app.use(bodyParser.urlencoded({
  extended: true,
}));

app.use(bodyParser.json({
  limit: '5mb',
}));

// app.use((req, res, next) => {
//   if (!req.secure) {
//     return res.redirect(['https://', req.get('Host'), req.url].join(''));
//   }
//   next();
// });

app.use('/', routes);

logger.info('App has been initialised.');

app.listen(PORT, () => {
  logger.info(`Listening on port ${PORT}`);
});
