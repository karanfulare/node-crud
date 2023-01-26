const express = require("express");
const bodyParser = require("body-parser");
const db = require("./config"); // require runs the code , try debugger->into

const app = express();

app.use(express.json());
app.use(bodyParser.json()); // for parsing the body received from user
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", require("./routes/index")); // imported routes

const port = 8000; // env can be used

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`server running on ${port}`);
  }
});
