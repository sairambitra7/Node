var express = require("express");
var router = express.Router();
var loginCtrl = require("../controllers/login.ctrl");

router.get("/login", loginCtrl.get);

module.exports = router;
