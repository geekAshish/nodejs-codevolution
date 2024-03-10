const path = require('node:path');

console.log(__filename)
console.log(__dirname)


// basename
console.log(path.basename(__filename))
console.log(path.basename(__dirname))

// extname
console.log(path.extname(__filename))
console.log(path.extname(__dirname))

// parse
console.log(path.parse(__filename))
// format
console.log(path.format(path.parse(__filename)))


// isAbsolute
console.log(path.isAbsolute(__filename));