var mongoose = require("mongoose");

var bookSchema = mongoose.Schema({
  name: String,
  author: String,
  price: Number,
  instock: Boolean
}); //this create the collection
var Book = mongoose.model("book", bookSchema);

module.exports = Book;

//import the package mongoose.model and provide the name(parameter) and structure goes inside an object.
//reason is mongodb doesn't support schema, no matter the data we save in collection it will save.
//thedata flows only in the given objects, it doesn't save the other data in db.
