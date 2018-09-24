//common js module pattern
//es6 module pattern
//import {Component} from '@angular/core';
//7 times faster
//listen func is async func
//hosting
//3 Parts
//part 1: Writing api (web api,rest api)
//part 2: Writing mvc
//part 3: chat {how to prepare a chat talk}

// var http = require("http");

// var server = http.createServer();

// server.listen(3000);

// console.log("Server is running on 3000");

//type-2
// var http = require("http");

// var server = http.createServer();

// server.listen(3000, function() {
//   console.log("Server is running on 3000"); //we are calling the func addAsync and passing parameters
//   //and given callback and callback executed by listen func by nodejs engine
// });

//type-3
// var http = require("http");

// function handleRequests(req, res) {
//   console.log(req.url); // it helps us what user url requesting for.
//   res.write("Hello World"); //write as long as u write
//   res.end(); // where ever you need end,sai that i am done!
// }

// var server = http.createServer(handleRequests);

// function callback() {
//   console.log("Server is running on 3000");
// }

// server.listen(3000, callback);

//How Routing works in node js

// var http = require("http");

// function handleRequests(req, res) {
//   //first handlereq func execute next
//   switch (
//     req.url // it swtiches req.url, what user req the url. based on req it handles
//   ) {
//     case "/":
//       res.write("Hello World");
//       res.end();
//       break;

//     case "/books":
//       res.write("Hello books");
//       res.end();
//       break;

//     case "/authors":
//       res.write("Hello authors");
//       res.end();
//       break;
//     // if we the above path was not matched, then the given req is standalone.
//     //we need to push some response
//     default:
//       res.write("you entered wrong path");
//       res.end();
//       break;
//   }
// }

// var server = http.createServer(handleRequests);

// function callback() {
//   console.log("Server is running on 3000");
// }

// server.listen(3000, callback);

//JSON Data using Routining

var http = require("http");

function handleRequests(req, res) {
  //first handlereq func execute next
  switch (
    req.url // it swtiches req.url, what user req the url. based on req it handles
  ) {
    case "/":
      res.write("Hello World");
      res.end();
      break;

    case "/books":
      var books = [
        {
          id: 1,
          name: "akhil's love story",
          author: "NVS Akhil",
          price: "1 crore"
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
