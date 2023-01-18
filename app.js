const express = require("express");
const app = express();

// create a GET route
app.get("/api/v1/health", (req, res) => {
  res.status(200).send({ status: "success", message: "API is healthy" });
});

app.get("/api/v1/temperature", function (req, res) {
  res.status(200).send("Temperature endpoint");
});

app.get("*", function (req, res) {
  res.status(404).send("invalid endpoint");
});

module.exports = app;
