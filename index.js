//syntax, we are using old pattern commonJs module pattern
// we are using global func "require func" to access the package.
//express function, we are involking express func to app,
//app nothing but entire application.
//listen func is unsyn operation,once operation done then cb would be called.
//Handling Req And Express Routining

var express = require("express");

// var calc = require("./calc");

// calc.add(100, 200);
var app = express();
var mongoose = require("mongoose");
var productCtrl = require("./controllers/products.ctrl");
var defaultCtrl = require("./controllers/default.ctrl");
var bookCtrl = require("./controllers/book.ctrl");

function callback() {
  console.log("server is running on port 3000");
}

app.listen(3000, callback);

mongoose.connect(
  //mongoose connected
  "mongodb://localhost:27017/productsDb",
  { useNewUrlParser: true },
  function() {
    console.log("Connected");
  }
);

// app.get("/", function(req, res) {
//   res.send("Express API");
// });

app.get("/cards", function(req, res) {
  res.send("List of Cards");
});

app.get("/products", productCtrl.get); //another to get the data from objects like(productCtrl.js).

app.get("/", defaultCtrl.get);
app.get("/health", defaultCtrl.health);
app.get("/book", bookCtrl.get);

app.get("/banners", function(req, res) {
  res.send("List of banners");
});
