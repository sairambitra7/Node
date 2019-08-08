var express = require("express");
var router = express.Router();
var productsCtrl = require("../controllers/products.ctrl");

router.get("/products", productsCtrl.get);
router.get("/products/:id", productsCtrl.getById);

module.exports = router;
