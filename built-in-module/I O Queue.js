// to queue a callback function in the I/O Queue

const fs = require('node:fs');

setTimeout(() => {
  console.log('setTimeout 1');
}, 0);

fs.readFile(__filename, () => {
  console.log('read File 1');
})

Promise.resolve().then(() => console.log('this is promise 1'));

process.nextTick(() => {
  console.log('this is nextTick 1');
})