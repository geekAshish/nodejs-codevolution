# What can you build with Node.js?

# Course structure

- Terms and concepts to understand what is Node.js
- Modules (User defined)
- Built-in modules
- Node.js internals
- npm - Node package manager
- CLI tool
- Misc

# What can you build with Node.js?

- Traditional websites
- Backend services like APIs
- Real-time applications
- Streaming services
- CLI tools
- Multiplayer games

# Inside NodeJS Code

# dependencies

- V8
- lib uv
- zlib
- crypto

# c/c++ features

# JS Library

- fs

* we use web api's inside nodejs

- Node.js is an open-source, cross-platform JavaScript runtime environment
- It is not a language, it is not a framework
- Capable of executing JavaScript code outside a browser
- It can execute not only the standard ECMAScript language but also new features that are made available through C++ bindings using the V8 engine
- It consists of C++ files which form the core features and JavaScript files which expose common utilities and some of the C++ features for easier consumption

# Executing JavaScript with Node

- Node REPL

1. Read
2. Evaluate
3. print
4. Loop

- Executing code in a JavaScript file in the command line

# Browser vs Node JS

- In the browser, most of the time what you are doing is interacting with the DOM, or
  other Web Platform APIs like Cookies. You don't have the document, window and
  all the other objects that are provided by the browser.

- In the browser, we don't have all the nice APIs that Node.js provides through its
  modules. For example the filesystem access functionality.

- With Node.js, you control the environment.

# Modules

- A module is an encapsulated and reusable chunk of code that has its own context
- In Node.js, each file is treated as a separate module
- Types of Modules

1. Local modules - Modules that we create in our application
2. Built-in modules - Modules that Node.js ships with out of the box
3. Third party modules - Modules written by other developers that we can use in our application

# Local Modules

# CommonJS

1. CommonJS is a standard that states how a module should be structured and
   shared
2. Node.js adopted CommonJS when it started out and is what you will see in code
   bases

CommonJS Standard
require('.path-name'); // importing

export.modules = functionName; // named export
const variableName = require('./path-nam'); // named import

- In node.js, each file is a module that is isolated by default
- To load a module into another file, we use the require function
- When index.js is executed, the code in the module is also executed
- If the file we are requiring is a javascript file, we can skip specifying the extension and node.js will infer it on our behalf


# Module Scope
- Immediately Invoked Function Expression (IIFE) in Node.js
- Each loaded module in Node.js is wrapped with an IIFE that provides private scoping of code

- Before a module's code is executed, Node.js will wrap it with a function wrapper that provides module scope
- This saves us from having to worry about conflicting variables or functions
- There is proper encapsulation and reusability is unaffected

# Module Wrapper
- Every module in node.js gets wrapped in an IIFE before being loaded which contains 5 parameter
- IIFE helps keep top-level variables scoped to the module rather than the global object
- The IIFE that wraps every module contains 5 parameters which are pretty important for the functioning of a module

(function(exports, require, module, __filename, __dirname) {
  const superHero = "Batman";
  console.log( superHero );
})

these all 5 parameter comes in the module


# Module Caching
super-hero.js


# Import Export Patterns

# module.exports vs exports
- Always use module.exports
- https://youtu.be/ghUIlSNRru0?si=VA5IvLJee-743423


# ES Modules
- At the time Node.js was created, there was no built-in module system in JavaScript
- Node.js defaulted to CommonJS as its module system
- As of ES2015, JavaScript does have a standardized module system as part of the language itself
- That module system is called EcmaScript Modules or ES Modules or ESM for short

main.mjs
math.mjs

# Importing JSON and Watch Mode
const data = require('./json-file');

node --watch fileName.js


# Built-in modules
Modules that Node.js ships with
Also referred to as core modules
Import the module before you can use it
path, events, fs, stream, http


# Path Module
The path module provides utilities for working with file and directory paths


# Callbacks
In JavaScript, functions are first class objects
A function can be passed as an argument to a function
A function can also be returned as values from other functions

function functionName(arg) {
  perform some action
};

function HigherOrderFunction(callbackFn) {
  callbackFn('some value')
};

HigherOrderFunction(functionName);

# Types of Callbacks
Synchronous callbacks
Asynchronous callbacks


# Synchronous callbacks
A callback which is executed immediately is called a synchronous callback
like sort, map, filter methods


# Asynchronous callbacks
1. A callback that is often used to continue or resume code execution after an asynchronous operation has completed
2. Callbacks are used to delay the execution of a function until a particular time or event has occurred
3. In Node.js have an asynchronous nature to prevent blocking of execution
4. Ex: reading data from a file, fetching data from a database or handling a network request

Asynchronous callbacks in browser: EventHandlers


# Asynchronous JavaScript

JavaScript is a synchronous, blocking, single-threaded language

# Asynchronous JavaScript contd.

- Just JavaScript is not enough
- We need new pieces which are outside of JavaScript to help us write asynchronous code
- For front-end, this is where web browsers come into play. For back-end, this is where Node.js comes into play
- Web browsers and Node.js define functions and APIs that allow us to register functions that should not be executed synchronously, and should instead be invoked asynchronously when some kind of event occurs
- For example, that could be the passage of time ( setTimeout or setInterval), the user's interaction with the mouse (addEventListener), data being read from a file system or the arrival of data over the network (callbacks, Promises, async-await)
- You can let your code do several things at the same time without stopping or blocking your main thread



# Events Module
The events module allows us to work with events in Node.js
An event is an action or an occurrence that has happened in our application that we can respond to
Using the events module, we can dispatch our own custom events and respond to those custom events in a non-blocking manner

# Extending from EventEmitter


# Detour
Character sets
Encoding
Streams and buffers
Asynchronous JavaScript

- Character sets
Character Sets are predefined lists of characters represented by numbers
Popular character sets - Unicode and ASCII
Unicode character set dictates that 86 should represent character V

- Encoding
Character encoding dictates how to represent a number in a character set as binary data before it can be stored in a computer
It dictates how many bits to use to represent the number
Example of a character encoding system is UTF-8
UTF-8 states that characters should be encoded in bytes (8 bits)
Eight Is or 0s should be used to represent the code of any character in binary
4 100 00000100
v => 86 => 01010110

- Streams
A stream is a sequence of data that is being moved from one point to another over time
Ex: a stream of data over the internet being moved from one computer to another
Ex: a stream of data being transferred from one file to another within the same computer
Process streams of data in chunks as they arrive instead of waiting for the entire data to be available before processing

- Streams contd.
Process streams of data in chunks as they arrive instead of waiting for the entire data to be available before processing
Ex: watching a video on YouTube
The data arrives in chunks and you watch in chunks while the rest of the data arrives over time
Ex: transferring file contents from fileA to fileB
The contents arrive in chunks and you transfer in chunks while the remaining contents arrive over time
Prevents unnecessary data downloads and memory usage


- Buffers contd.
Area where people wait is nothing but the buffer
Node.js cannot control the pace at which data arrives in the stream
It can only decide when is the right time to send the data for processing
If there is data already processed or too little data to process, Node puts the arriving data in a buffer
It is an intentionally small area that Node maintains in the runtime to process a stream of data

Ex: streaming a video online
If your internet connection is fast enough, the speed of the stream will be fast enough to instantly fill up the buffer and send it out for processing
That will repeat till the stream is finished
If your connection is slow, after processing the first chunk of data that arrived, the video player will display a loading spinner which indicates it is waiting for more data to arrive
Once the buffer is filled up and the data is processed, the video player shows the video
While the video is playing, more data will continue to arrive and wait in the buffer
Binary data, character sets and encoding < = > Buffers?



# fs Module

The file system (fs) module allows you to work with the file system on your computer

# fs Promise Module

const fs = require('node:fs/promises');

// then way
fs.readFile('file.txt', 'utf-8')
.then((data) => console.log(data))
.then((error) => console.log(error))

// async-await way
async function readFileFunc() {
try {
const data = await fs.readFile('file.txt', 'utf-8');
log(data)
} catch(err) {
log(err)
}
}

# Streams

A stream is a sequence of data that is being moved from one point to another over time
Ex: a stream of data being transferred from one file to another within the same computer
Work with data in chunks instead of waiting for the entire data to be available at once
If you're transferring file contents from fileA to fileB, you don't wait for entire fileA content to be saved in temporary memory before moving it into fileB
Instead, the content is transferred in chunks over time which prevents unnecessary memory usage
Stream is in-fact a built-in node module that inherits from the event emitter class
Other modules internally use streams for their functioning

const fs = require('node:fs');

const readableStream = fs.createReadStream('./file.txt', {
encoding: 'utf-8',
highWaterMark: 2,
});

const writeableStream = fs.createWriteStream('./file2.txt', {
encoding: 'utf-8',
});

readableStream.on('data', (chunk) => {
log(chunk);
writeableStream.write(chunk);
})

# Types of Streams

Readable streams from which data can be read
Writable streams to which we can write data
Duplex streams that are both Readable and Writable
Transform streams that can modify or transform the data as it is written and read
Ex: Reading from a file as readable stream
Ex: Writing to a file as writable stream
Ex: Sockets as a duplex stream
Ex: File compression where you can write compressed data and read de-compressed data to and from a file as a transform stream

# Pipes

readableStream.pipe(writeableStream);

# HTTP

# How the web works

Computers connected to the internet are called clients and servers
Clients are internet-connected devices such as computers or mobile phones along with web-accessing software available on those devices such as a web browser
Servers on the other hand are computers that store web pages, sites, or apps

- Hypertext Transfer Protocol
  A protocol that defines a format for clients and servers to speak to each other
  The client sends an HTTP request and the server responds with an HTTP response

- HTTP and Node
  We can create a web server using Node.js
  Node.js has access to operating system functionality like networking
  Node has an event loop to run tasks asynchronously and is perfect for creating web servers that can simultaneously handle large volumes of requests
  The node server we create should still respect the HTTP format
  The HTTP module allows creation of web servers that can transfer data over HTTP

# Creating a Node Server
