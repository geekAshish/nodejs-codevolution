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
http.js

# JSON Response

res.writeHead(200, {'Content-Type': 'application/json'})
res.end(JSON.stringify(superHero))

# HTML Response

res.writeHead(200, {'Content-Type': 'text/html'})
res.end("<h1>superman</h1>")

# HTML Template
dynamic html value

# HTTP Routing

# Web Framework

# Libuv

- What?
  Libuv is a cross platform open source library written in C language

- Why?
  handles asynchronous non-blocking operations in Node.js

- How?

1. Thread pool
2. Event loop

# Thread Pool

- Main thread:
  "Hey Libuv, I need to read file contents but that is a time consuming task. I don't
  want to block further code from being executed during this time. Can I offload this
  task to you?"

- Libuv:
  "Sure, main thread. Unlike you, who is single threaded, I have a pool of threads
  that I can use to run some of these time consuming tasks. When the task is done,
  the file contents are retrieved and the associated callback function can be run."

* Experiment 1 Inference
  Every method in node.js that has the "sync" suffix always runs on the main thread
  and is blocking

* Experiment 2 Inference
  A few async methods like fs.readFile and crypto.pbkdf2 run on a separate thread
  in libuv's thread pool. They do run synchronously in their own thread but as far as
  the main thread is concerned, it appears as if the method is running
  asynchronously

* Experiment 3 Inference
  Libuv's thread pool has 4 threads

# Thread Pool Size

process.env.UV_THREADPOOL_SIZE = 6;

- Experiment 4 Inference
  By increasing the thread pool size, we are able to improve the total time taken to
  run multiple calls of an asynchronous method like pbkdf2

* Experiment 5 Inference
  Increasing the thread pool size can help with performance but that is limited by the
  number of available CPU cores

# Network I/O
- Experiment 6 Inference
1. Although both crypto.pbkdf2 and https.request are asynchronous, https.request
method does not seem to use the thread pool
2. https.request does not seem to be affected by the number of CPU cores either


1. https.request is a network input/output operation and not a CPU bound operation
2. It does not use the thread pool
3. Libuv instead delegates the work to the operating system kernel and whenever possible, it will poll the kernel and see if the request has completed


* Libuv and Async Methods Summary
1. In Node.js, async methods are handled by Libuv
2. They are handled in two different ways
i. Native async mechanism
ii. Thread pool
3. Whenever possible, Libuv will use native async mechanisms in the OS so as to avoid blocking the main thread
4. Since this is part of the kernel, there is different mechanism for each OS. We have epoll for Linux, Kqueue for MacOS and IO Completion Port on Windows
5. Relying on native async mechanisms makes Node scalable as the only limitation is the operating systern kernel
6. Example of this type is a network 1/0 operation


* Libuv and Async Methods Summary contd.
1. If there is no native async support and the task is file 1/0 or CPU intensive, Libuv uses the thread pool to avoid blocking the main thread
2. Although the thread pool preserves asynchronicity with respect to Node's main thread, it can still become a bottleneck if all threads are busy




# Event Loop
* Async Code Execution
1. JavaScript is a synchronous, blocking, single-threaded language
2. To make async programming possible, we need the help of Libuv
3. It is a C program and is part of Libuv
4. A design pattern that orchestrates or co-ordinates the execution of synchronous and asynchronous code in Node.js

* Asynchronous Code Execution in Node.js runtime

* Few Questions
1. Whenever an async task completes in Libuv, at what point does Node decide to run the associated callback function on the call stack?
Answer 1. Callback functions are executed only when the call stack is empty. The normal flow of execution fill not be interrupted to run a callback function

2. What about async methods like set Timeout and setInterval which also delay the execution of a callback function?
Answer 2. set Timeout and setInterval callbacks are given first priority

3. If two async tasks such as setTimeout and readFile complete at the same time, how does Node decide which callback function to run first on the call stack?
Answer 3. Timer callbacks are executed before 1/0 callbacks even if both are ready at the exact same time


* Event Loop - Execution Order
1. User written synchronous JavaScript code takes priority over async code that the runtime would like to execute
2. Only after the call stack is empty, the event loop comes into picture

# Event Loop - Execution Order
1. Any callbacks in the micro task queues are executed. First, tasks in the nextTick queue and only then tasks in the promise queue
2. All callbacks within the timer queue are executed
3. Callbacks in the micro task queues if present are executed. Again, first tasks in the next Tick queue and then tasks in the promise queue
4. All callbacks within the 1/0 queue are executed
5. Callbacks in the micro task queues if present are executed. nextTick queue followed by Promise queue.
6. All callbacks in the check queue are executed
7. Callbacks in the micro task queues if present are executed. Again, first tasks in the nextTick queue and then tasks in the promise queue
8. All callbacks in the close queue are executed
9. For one final time in the same loop, the micro task queues are executed. nextTick queue followed by promise queue.

* If there are more callbacks to be processed, the loop is kept alive for one more run and the same steps are repeated
* On the other hand, if all callbacks are executed and there is no more code to process, the event loop exits.


# Micro task Queues
* Experiment 1 Inference
All user written synchronous JavaScript code takes priority over async code that the runtime would like to eventually execute

* Experiment 2 Inference
All callbacks in nextTick queue are executed before callbacks in promise queue


* Use of process.nextTick is discouraged as it can cause the rest of the event loop to starve
* If you endlessly call process.nextTick. the control will never make it past the micro task queue

* Two main reasons to use process.nextTick
1. To allow users to handle errors, cleanup any then unneeded resources, or perhaps try the request again before the event loop continues
2. To allow a callback to run after the call stack has unwound but before the event loop continues



# Timer Queues
Timer Queue technically isn't a queue, it's a min heap data structure

Experiment 3 Inference
Callbacks in the micro-task queues are executed before callbacks in the timer queue

Experiment 4 Inference
Callbacks in micro-task queues are executed in between the execution of callbacks in the timer queue

Experiment 5 Inference
Timer queue callbacks are executed in FIFO order


# I/O Queues
Most of the async methods from the built-in modules queue the callback function in the I/O queue

Experiment 6 Inference
Callbacks in the micro-task queues are executed before callbacks in the 1/0 queue

Experiment 7 Inference
When running setTimeout with delay Oms and an I/O async method, the order of execution can never be guaranteed

Why can the order of execution never be guaranteed?

* https://chromium.googlesource.com/chromium/blink/+/master/Source/core/frame/DOMTimer.cpp

Experiment 8 Inference
1/0 queue callbacks are executed after Micro-task queues callbacks and Timer queue callbacks



