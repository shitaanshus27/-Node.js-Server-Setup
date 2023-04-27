const express = require("express");
const app = express();

app.get("/", function (request, response) {
  response.send(`<h1>Hello,Calc</h1>`);
});

app.listen(3000, () => {
  console.log(`Server listening on port 3000`);
});
