const express = require("express");
const routes = express.Router();

router.get("/", (req, res, next) => {
  res.send("<h1>test homepage</>");
});

module.exports = routes