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
console.log(path.isAbsolute("./path.json"))

console.log(path.join( "folder1", "folder2" ,"index.html"))
console.log(path.join( "/folder1", "folder2" ,"index.html"))
console.log(path.join( "/folder1", "//folder2" ,"index.html"))
console.log(path.join( "/folder1", "//folder2" ,"../index.html"))
console.log(path.join( __dirname, 'data.json'))

console.log(path.resolve( "folder1", "folder2" ,"index.html"))
console.log(path.resolve( "/folder1", "folder2" ,"index.html"))
console.log(path.resolve( "/folder1", "//folder2" ,"index.html"))
console.log(path.resolve( "/folder1", "//folder2" ,"../index.html"))
console.log(path.resolve( __dirname, 'data.json'))

/*
node: Protocol
Makes it perfectly clear that the import is a Node.js builtin module
Makes the import identifier a valid absolute URL
Avoids conflicts for future Node.js built-in modules
*/