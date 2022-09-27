const http = require('http');

const server = http.createServer(function (req, res) {
  res.writeHead(200, {
    'Content-type': 'text/html;charset=utf-8;charset=utf-8',
  });
  res.write('<h3>Server Básico con Node</h3>');
  console.log('peticion web');
  res.end();
});

server.listen(3000);
console.log('Server run on port 3000');
