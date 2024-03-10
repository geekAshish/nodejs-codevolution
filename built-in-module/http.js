const http = require('node:http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'})
  res.end("Hey, man!")
})

// port, callback fn when server start
server.listen(2010, () => {
  console.log('server started successfully');
});

