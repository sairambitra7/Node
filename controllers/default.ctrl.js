//1xx -- information
//2xx -- success
//3xx -- redirects
//4xx -- client error,user error
//5xx -- server errors or service error

class DefaultCtrl {
  get(req, res) {
    res.status(200); //convensions says its good
    res.send("Hey This is Your Dashboard");
  }

  health(req, res) {
    var obj = {
      status: "up"
    };
    res.status(200);
    res.json(obj);
  }
}

module.exports = new DefaultCtrl(); //we need to create object because we have taken class.while export or consume we need to create object.
