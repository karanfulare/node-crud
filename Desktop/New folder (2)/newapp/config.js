const mongoose = require("mongoose");

mongoose.set("strictQuery", true); // some deprecation warning

mongoose.connect("mongodb://localhost:27017/newapp"); // if it does not connect go to search>services>mongodb>start service.

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Error connecting to database"));

db.once("open", function () {
  console.log("Connected to DataBase");
});

module.exports = db;
