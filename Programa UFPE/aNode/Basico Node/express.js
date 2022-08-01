var express = require('express');
const app = express();

app.get('/', function(req, res) {
  res.send('Seja bem vindo ao meu web utilizando express!');
});

app.get('/sobre', function(req, res) {
  res.send ('Bem vindo ao caminho sobre Esse é mais um teste');
});

app.get('/blog', function(req, res) {
  res.send('Caminho blog');
});

app.get('/ola', function(req, res) {
  res.send('Ola!');
});

app.get('/teste', function(req, res) {
  res.send('Teste na pagina teste');
})

app.listen(8081, function() {
  console.log("Servidor esta rodando com o fremework express1!")
}); //Tem que ser a ultima linha de codigo