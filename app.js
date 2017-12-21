const express = require('express');
const path = require('path');
const logger = require('./config/logger');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3000;

// Express only serves static assets in production
// if (process.env.NODE_ENV === 'production') {
app.use(express.static('build'));
// }

app.use(helmet());

app.use(bodyParser.urlencoded({
  extended: true,
}));

app.use(bodyParser.json({
  limit: '5mb',
}));

app.use('/', routes);

logger.info('App has been initialised.');

app.listen(PORT, () => {
  logger.info(`Listening on port ${PORT}`);
});
