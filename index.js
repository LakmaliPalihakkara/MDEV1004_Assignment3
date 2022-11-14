const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.post("/instanotification", (request, response) => {
  const { body } = request;
  console.log(body.notification);
  response.json();
});

app.listen(port, () => {
  console.log("App listening on port " + port);
});
