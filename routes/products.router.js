var express = require("express");
var router = express.Router();
var productsCtrl = require("../controllers/products.ctrl");

router.get("/products", productsCtrl.get);

module.exports = router;
