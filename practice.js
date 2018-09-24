// function add(a, b) {
//   return a + b;
// }

// var result = add(10, 20);
// console.log(result);

// //when we are using global.a
// // In javaScrfipt it doesn't support it throughs error but,
// // in type script it shows undefined and execute and shows output

// function add(a, b) {
//   console.log(global.a);
//   return a + b;
// }

// var result = add(10, 20);
// console.log(result);

// //async
// //single threaded

// function addAsync(a, b) {
//   setTimeout(function() {
//     return a + b;
//   }, 1000);
// }

// var result = addAsync(10, 20);
// console.log(result);

//set Timeout

// function addAsync(a, b) {
//   console.log("Execution started");
//   setTimeout(function() {
//     console.log("Calculation Completed");
//     return a + b;
//   }, 1000);
//   console.log("Execution Stopped");
// }

// var result = addAsync(10, 20);
// console.log(result);

//call backs synchronize

function addAsync(a, b, cb) {
  console.log("Execution started");
  setTimeout(function() {
    console.log("Calculation Completed");
    var c = a + b;
    cb(c);
  }, 1000);
  console.log("Execution Stopped");
}

function callback(result) {
  console.log(result);
}

addAsync(10, 20, callback); //This is called addAsync func

for (var i = 0; i < 1000; i++) {
  console.log(i);
}

console.log("stopped");
