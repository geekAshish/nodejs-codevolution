
// 1. nextTick queue
// to queue up a callback function in the nextTick queue

Promise.resolve().then(() => console.log('this is console.log 4'))

console.log('console.log 1');
process.nextTick(() => console.log('this is process.next 2'));
console.log('console.log 3');

Promise.resolve().then(() => console.log('this is console.log 5'))


// 2. Promise queue
// to queue up a callback function in the promise queue, there is many ways but of them si below
Promise.resolve().then(() => console.log('this is console.log 5'))