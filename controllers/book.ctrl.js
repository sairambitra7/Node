var Book = require("../models/book.model");

class BookCtrl {
  get(req, res) {
    // var books = Book.find();
    Books.find(function(err, books) {
      res.status(200);
      res.json(books);
    });
  }
  save(req, res) {
    console.log(req.body);

    var book = new Book(req.body);

    book.save(function(err, book) {
      res.status(201); // created
      res.send(book);
    });
  }
}

module.exports = new BookCtrl();
