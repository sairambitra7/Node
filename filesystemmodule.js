//3 Parts
//part 1: Writing api (web api,rest api)
//part 2: Writing mvc
//part 3: chat {how to prepare a chat talk}

var http = require("http");
var fs = require("fs");

function handleRequests(req, res) {
  //first handlereq func execute next
  switch (
    req.url // it swtiches req.url, what user req the url. based on req it handles
  ) {
    case "/":
      var contents = fs.readFileSync("filesystemmodule.html");
      res.write(contents);
      res.end();
      break;

    case "/books":
      var books = [
        {
          id: 1,
          name: "akhil's love story",
          author: "NVS Akhil",
          price: "2 crore"
        },
        {
          id: 2,
          name: "Dff Cards",
          author: "Prasad srg",
          price: "2 crore"
        },
        {
          id: 3,
          name: "legend",
          author: "balayya",
          price: "1.5 crore"
        }
      ];
      res.write(JSON.stringify(books));
      res.end();
      break;

    case "/authors":
      res.write("Hello authors");
      res.end();
      break;
    // if we the above path was not matched, then the given req is standalone.
    //we need to push some response
    default:
      res.write("you entered wrong path");
      res.end();
      break;
  }
}

var server = http.createServer(handleRequests);

function callback() {
  console.log("Server is running on 3000");
}

server.listen(3000, callback);

//Settime demo example----------------------------------------------------------

setTimeout(() => {
  console.log("settimeout executed");
}, 3000);
