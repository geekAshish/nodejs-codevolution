// to queue a callback in the Check queue


// const fs = require('node:fs');

// setTimeout(() => {
//   console.log('setTimeout 1');
// }, 0);

// fs.readFile(__filename, () => {
//   console.log('read File 1');
//   setImmediate(() => console.log('console.log setImmediate inside of readFile'));

//   Promise.resolve().then(() => console.log('console.log Promise inside readFile'));
//   process.nextTick(() => console.log('console.log nextTick inside readFile'));
// })

// Promise.resolve().then(() => console.log('this is promise 1'));
// process.nextTick(() => console.log('this is nextTick 1'))
// setImmediate(() => console.log('console.log setImmediate 1'))



// experiment 12
// setImmediate(() => console.log('console.log setImmediate 1'))
// setImmediate(() => {
//   console.log('console.log setImmediate 2');
//   process.nextTick(() => console.log('console.log nextTick inside setImmediate 1'));
//   Promise.resolve().then(() => console.log('console.log Promise inside setImmediate 1'));
// })
// setImmediate(() => console.log('console.log setImmediate 3'))


// experiment 13
// setTimeout(() => console.log('setTimeout 2'), 0);
// setImmediate(() => console.log('set Immediate'));
