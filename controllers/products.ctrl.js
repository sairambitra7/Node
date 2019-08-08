var products = [
  {
    id: 1,
    name: "akhil's love story",
    author: "NVS Akhil",
    price: "1 crore"
  },
  { id: 2, name: "Dff Cards", author: "Prasad srg", price: "2 crore" },
  { id: 3, name: "legend", author: "bala", price: "1.5 crore" } //globally executed
];

var productsCtrl = {
  get: function(req, res) {
    res.status(200);
    res.json(products);
  },
  getById: function(req, res) {
    var id = req.params.id;
    var product; //params is an objects

    for (var i = 0; i < products.length; i++) {
      if (products[i].id == id) {
        product = products[i];
      }
    }
    if (product) {
      res.status(200);
      res.json(products);
    } else {
      res.status(404); //nor found its client error
      res.send("Not Found");
    }

    res.status(200);
    res.json(product);
  }
};

module.exports = productsCtrl;
