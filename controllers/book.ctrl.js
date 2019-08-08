var Book = require("../models/book.model");

class BookCtrl {
  get(req, res) {
    var books = Book.find();
    let savebook = new Book({ name: "dhgfajh" });
    console.log(savebook);
    savebook.save();

    Book.find(function(err, data) {
      console.log(data);
      res.status(200);
      res.json(data);
    });
  }
  put(req, res) {
    console.log(req.body);

    var book = new Book(req.body);

    book.save(function(err, book) {
      res.status(201); // created
      res.send(book);
    });
  }
}

module.exports = new BookCtrl();
