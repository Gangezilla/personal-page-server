const express = require('express');
const work = require('./data/work');
const education = require('./data/education');
const projects = require('./data/projects');

const router = express.Router();

router.get('/work/', (req, res) => {
  res.send(work);
});

router.get('/education/', (req, res) => {
  res.send(education);
});

router.get('/projects/', (req, res) => {
  res.send(projects);
});

module.exports = router;
