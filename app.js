const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const adminRoutes = "./routes/admin.js";
const shopRoutes = "./routes/shop.js";

app.use(bodyParser.urlencoded({ extended: true }));

app.use(adminRoutes);
app.use(shopRoutes);

app.listen(1910, () => {
  console.log("PORT: 1910");
});
