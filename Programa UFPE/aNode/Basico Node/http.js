var http = require('http');

http.createServer(function(req, res) {
  res.end("Ola pessoal! Bem vindo ao meu website");
}).listen(8081);

console.log('O servidor está logando');