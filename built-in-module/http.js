const http = require('node:http');
const fs = require('node:fs');

// createServer to create a server which take req listener and res listener
// req object give us information about incoming request
// and res object used to send back the response to the client
const server = http.createServer((req, res) => {
  const superHero = {
    superHeroName: 'Batman',
    power: 'rich'
  }
  let NAME = 'Ben Ten';

  // res.writeHead(200, {'Content-Type': 'text/html'})
  // fs.createReadStream(__dirname + '/index.html').pipe(res)
  
  let html = fs.readFileSync('./index.html', 'utf-8')
  html = html.replace('{{NAME}}', NAME);
  // res.end(html)
  
  // req.method -- GET, POST, DELETE, PUT
  if (req.url === '/') {
    res.writeHead(200, {'Content-Type': 'text/plain'})
    res.end('this is home page');
  } else if (req.url === '/about') {
    res.writeHead(200, {'Content-Type': 'text/plain'})
    res.end('this is about page');
  } else if (req.url === '/api') {
    res.writeHead(200, {'Content-Type': 'application/json'})
    res.end(JSON.stringify(superHero));
  } else {
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.end(html);
  }
})

// port, callback fn when server start
server.listen(2010, () => {
  console.log('server started successfully');
});

