// 1. 
// function add(a, b) {
//   return a + b;
// }

// module.exports = add;


// 2.
// module.exports = function(a, b) {
//     return a + b;
// }


// 3.
// function add(a, b) {
//   return a + b;
// }

// function subtract(a, b) {
//   return a - b;
// }

// module.exports = {add, subtract};


// 4.
// module.exports.add = (a, b) => {
//   return a + b;
// }

// module.exports.subtract = (a, b) => {
//   return a - b;
// }


// 5. it's good to use module.exports instead of that
exports.add = (a, b) => {
  return a + b;
}

exports.subtract = (a, b) => {
  return a - b;
}
