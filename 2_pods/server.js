const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/json'});
  res.end('Hello, World!');
});

const port = 3000;
server.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});