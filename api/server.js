const { server } = require("./app");

server.listen().then(({ url }) => {
  console.log(`
    Server is running!
    Listening on port 4000
    Ready at ${url}
  `);
});