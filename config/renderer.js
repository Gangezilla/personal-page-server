const React = require('react');
const ReactDOMServer = require('react-dom/server');
// import our main App component
const App = require('../page/src/App');

const path = require('path');
const fs = require('fs');

module.exports = (req, res, next) => {
  console.log('gguii');
  // point to the html file created by CRA's build tool
  const filePath = path.resolve(__dirname, 'build', 'index.html');
  fs.readFile(filePath, 'utf8', (err, htmlData) => {
    if (err) {
      return res.status(404).end();
    }
    // render the app as a string
    const html = ReactDOMServer.renderToString(<App />);
    // inject the rendered app into our html and send it
    return res.send(
      htmlData.replace(
        '<div id="root"></div>',
        `<div id="root">${html}</div>`,
      ),
    );
  });
};
