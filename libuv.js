// thread pool
const crypto = require("node:crypto");

// default thread pool size is 4, but you change it, but not more then the cpu core thread
process.env.UV_THREADPOOL_SIZE = 6;

const MAX_CALLS = 5;

const start = Date.now();

for (let i = 0; i < MAX_CALLS; i++) {
  crypto.pbkdf2("password", "salt", 100000, 512, "sha512", () => {
    console.log(`Hash: ${i + 1}`, Date.now() - start);
  });
}
