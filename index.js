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

