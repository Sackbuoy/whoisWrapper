const express = require('express');
const whois = require('whois-api');

const app = express();

app.get('/lookup/:domain', (req, resp) => {
  const domainName = req.params.domain;
  console.log(`Performing WHOIS lookup for ${domainName}`);

  whois.lookup(domainName, (err, res) => {
    err === null ? resp.send(res) : resp.send(err);
    console.log(res);
    console.log(err + "\n");
  });
});

app.get('*', (req, resp) => {
  resp.status(404).send('Page does not exist');
});

module.exports = app;







