const http = require('http');
const fs = require('fs');

// Write HTML content to a file
const htmlContent = `
<!DOCTYPE html>
<html>
<head><title>Welcome</title></head>
<body>
  <h1>Hello from Node.js Server!</h1>
  <p>This page is served from an HTML file.</p>
</body>
</html>
`;

fs.writeFileSync('index.html', htmlContent); // Save HTML to file

// Create HTTP server
http.createServer((req, res) => {
  fs.readFile('index.html', (err, data) => {
    if (err) {
      res.writeHead(500);
      res.end('Error loading page');
    } else {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    }
  });
}).listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
