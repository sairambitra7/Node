var mongoose = require("mongoose");

var loginSchema = mongoose.Schema({
  vid: String,
  userid: String,
  email: String,
  mobile: Number
});

var Login = mongoose.model("login", loginSchema);

module.export = Login;
