var express = require("express");
var router = express.Router();
var bookCtrl = require("../controllers/book.ctrl");

router.get("/book", bookCtrl.get);

module.exports = router;
