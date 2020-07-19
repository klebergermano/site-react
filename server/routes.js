const express = require("express");

const app = express.Router();

app.post("/form", (request, response) => {
  console.log("aaaaaaaaaaaaaaaaaaaaaaa", request.body);
});

//Exports the routes collection to server.js
module.exports = app;
