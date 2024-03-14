// to queue a call back in close queue, we add a listener to the close event

const fs = require('node:fs');

const readableStream = fs.createReadStream(__filename);
readableStream.close()

readableStream.on('close', () => {
  console.log("this is from readableStream close event callback");
});

setImmediate(() => console.log('console.log setImmediate 1'));
Promise.resolve().then(() => console.log('this is promise 1'));
process.nextTick(() => console.log('this is nextTick 1'));


