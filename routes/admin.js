const express = require("express");
const router = express.Router();
const path = require("path");
const rootDir = require("../utils/path.js");

const products = [];

router.get("/add-product", (req, res, next) => {
  res.render("add-product", { productTitle: "Product" });
});

router.post("/add-product", (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect("/");
});

exports.routes = router;
exports.products = products;
