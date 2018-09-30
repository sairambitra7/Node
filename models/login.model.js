var mongoose = require("mongoose");

var loginSchema = mongoose.Schema({
  v_id: String,
  name: String,
  email: String,
  mobile: Number
});

var Login = mongoose.model("login", loginSchema);

module.export = Login;
