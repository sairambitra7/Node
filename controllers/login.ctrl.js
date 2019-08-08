var Login = require("../models/login.model");

class LoginCtrl {
  get(req, res) {
    // var login = Login.find();
    // let savelogin = new Login({ v_id: "1" });

    let login = new Login({ userid: "1234567890" });
    login.save();
    // savebook.save();

    Login.find(function(err, data) {
      console.log(data);
      res.status(200);
      res.json(data);
    });
  }

  put(req, res) {
    console.log(req.body);

    var login = new Login(req.body);

    login.save(function(err, login) {
      res.status(201);
      res.send(login);
    });
  }
}

module.exports = new LoginCtrl();
