const express = require('express');
const subdomain = require('express-subdomain');
const helmet = require('helmet');

const logger = require('./config/logger');
const bodyParser = require('body-parser');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('build'));

app.use(helmet());

app.use(bodyParser.urlencoded({
  extended: true,
}));

app.use(bodyParser.json({
  limit: '5mb',
}));

app.use('/', routes);

app.use(subdomain('blog', express.static('blog')));

logger.info('App has been initialised.');

app.listen(PORT, () => {
  logger.info(`Listening on port ${PORT}`);
});
