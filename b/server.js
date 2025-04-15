// main.js
const http = require('http');
const myModule = require('./modules');

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write("Current Date & Time: " + myModule.getDateTime());
  res.end();
}).listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
