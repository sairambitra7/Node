var productsCtrl = {
  get: function(req, res) {
    var products = [
      {
        id: 1,
        name: "akhil's love story",
        author: "NVS Akhil",
        price: "1 crore"
      },
      { id: 2, name: "Dff Cards", author: "Prasad srg", price: "2 crore" },
      { id: 3, name: "legend", author: "bala", price: "1.5 crore" }
    ];
    res.status(200);
    res.json(products);
  }
};

module.exports = productsCtrl;
