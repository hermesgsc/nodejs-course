const express = require("express");
const app = express();

app.use("/add-product", (req, res, next) => {
  res.send("<h1>test product</>");
});

app.use("/", (req, res, next) => {
  res.send("<h1>test homepage</>");
});

app.listen(1910);
