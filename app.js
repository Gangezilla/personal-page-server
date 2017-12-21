const express = require('express');
const path = require('path');
// const bodyParser = require('body-parser');
// const cookieParser = require('cookie-parser');
const logger = require('./config/log');
const helmet = require('helmet');
// const session = require('express-session');
// const cors = require('cors');

// const { initPool } = require('./src/db');

const app = express();
const PORT = process.env.PORT || 3000;

// Express only serves static assets in production
// if (process.env.NODE_ENV === 'production') {
app.use(express.static('build'));
// }

app.use(helmet());
// app.use(cors({ credentials: true, origin: true }));
// app.use(cookieParser());

// app.use(bodyParser.urlencoded({
//   extended: true,
// }));

// app.use(bodyParser.json({
//   limit: '5mb',
// }));

logger.info('App has been initialised.');

app.listen(PORT, () => {
  logger.info(`Listening on port ${PORT}`);
});
