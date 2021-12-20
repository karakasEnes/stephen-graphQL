const express = require('express');
const expressGraphQL = require('express-graphql');
const app = express();

app.use(
  '/graphql',
  expressGraphQL({
    grapiql: true,
  })
);

app.listen(4000, () => {
  console.log('listening on port 4000');
});
