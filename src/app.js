const path = require('path');
const { Server } = require('http');
const express = require('express');
const React = require('react');
// const renderToString = require('react-dom/server');

const app = new express();
const server = new Server(app);

// app.set('views', [path.join(__dirname, 'views')]);
// app.set('view engine', 'js');

app.use(express.static('public'));
// define the folder that will be used for static assets
// app.use(Express.static(path.join(__dirname, 'static')));

// universal routing and rendering
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname+'/public/index.html'))
});

app.get('/bundle.js', (req, res) => {
  res.sendFile(path.join(__dirname+'/public/bundle.js'))
});

app.get('/style.css', (req, res) => {
  res.sendFile(path.join(__dirname+'/public/style.css'))
});

// res.sendFile(path.join(__dirname+'/signup.html'))

// start the server
const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV || 'production';
server.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  console.info(`Server running on http://localhost:${port} [${env}]`);
});
