// const sum = require('./add');

// console.log("Index.js");
// const numberSum = sum(2, 5, 3);
// console.log(numberSum);


// Module Scope, wrapper
// require('./batman');
// require('./superman');


// Module Caching
// 1.
// const superHeroName = require('./super-hero');
// console.log(superHeroName.getName());
// superHeroName.setName('Ashish');
// console.log(superHeroName.getName());

// const newSuperHeroName = require('./super-hero');
// console.log(newSuperHeroName.getName());
// console.log(superHeroName.getName());



// Module diff. pattern
// const add = require('./math');
const {add, subtract} = require('./math')
const sum = add(4, 5)
const sub = subtract(41, 5)
console.log(sum, sub);




// console.log("Getting Exciting");

// function add(a, b) {
//   let sum = a + b;
//   return sum;
// }

// const sum = require("./math.js");
// const value = sum(3, 4);
// console.log(value);

// fs module
// const fs = require("node:fs");

// reading file sync way - readFileSync
// const fileContentsBuffer = fs.readFileSync("./file.txt");
// console.log(fileContentsBuffer, "binary data");

// async way of reading file
// const fileContents = fs.readFileSync("./file.txt", "utf-8");
// console.log(fileContents);

// fs.readFile("./file.txt", "utf-8", (error, data) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(data);
//   }
// });

// fs.writeFileSync("./great.txt", "This is cool");

// fs.writeFile("./great.txt", "\nThis is cool again", { flag: "a" }, (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("File written successfully!!!");
//   }
// });

const fs = require("node:fs");

const readableStream = fs.createReadStream("./file.txt", {
  encoding: "utf-8",
  highWaterMark: 1,
});

const writeableStream = fs.createWriteStream("./file2.txt", {
  encoding: "utf-8",
});

// readableStream.on("data", (chunk) => {
//   console.log(chunk);
//   writeableStream.write(chunk);
// });

// alternative way
readableStream.pipe(writeableStream);
