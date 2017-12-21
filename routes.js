const express = require('express');
const logger = require('./config/logger');
const work = require('./data/work');
const education = require('./data/education');
const projects = require('./data/projects');

const router = express.Router();

router.get('/work/', (req, res) => {
  logger.info('Work route hit, sending back work data');
  res.send(work);
});

router.get('/education/', (req, res) => {
  res.send(education);
});

router.get('/projects/', (req, res) => {
  res.send(projects);
});

module.exports = router;
