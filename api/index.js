import express from 'express'
import whois from 'whois-api';

const PORT = 3001;
const app = express();

app.listen(PORT, '0.0.0.0', () =>
  console.log(`WHOIS wrapper API has started, and is running on port ${PORT}`)
);

app.get('/lookup/:domain', (req, resp) => {
  const domainName = req.params.domain;
  console.log(`Performing WHOIS lookup for ${domainName}`);

  whois.lookup(domainName, (err, res) => {
    err === null ? resp.send(res) : resp.send(err);
    console.log(res);
    console.log(err + "\n");
  });
});