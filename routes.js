const express = require('express');
const logger = require('./config/logger');
const work = require('./data/work');
const education = require('./data/education');
const projects = require('./data/projects');
const serverRenderer = require('./config/renderer');

const router = express.Router();

router.use('^/$', serverRenderer);

router.get('/work/', (req, res) => {
  console.log('??');
  res.send(work);
});

router.get('/education/', (req, res) => {
  res.send(education);
});

router.get('/projects/', (req, res) => {
  res.send(projects);
});

module.exports = router;
