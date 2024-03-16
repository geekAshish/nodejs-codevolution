const cluster = require('node:cluster');
const OS = require('node:os');

console.log(OS.cpus().length);


if (cluster.isMaster) {
  console.log(`Master process ${process.pid} is running`);
  cluster.fork();
  cluster.fork();
} else {
  console.log(`Worker ${process.pid} started`);
  // write you logic
}

