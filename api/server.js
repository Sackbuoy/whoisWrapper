const app = require("./app");

// const PORT = 3001;

// app.listen(PORT, '0.0.0.0', () =>
//   console.log(`WHOIS wrapper API has started, and is running on port ${PORT}`)
// );

app.listen().then(({ url }) => {
  console.log(`
    Server is running!
    Listening on port 4000
    Ready at ${url}
  `);
});