const express = require("express");
const router = express.Router();
const path = require("path");
const rootDir = require("../utils/path.js");
const adminData = require("./admin.js");

router.get("/", (req, res, next) => {
  const products = adminData.products;
  console.log(products);
  res.render("shop", { products: products, shopTitle: "Shop" });
});

module.exports = router;
