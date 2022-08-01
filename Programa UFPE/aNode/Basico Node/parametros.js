var express = require('express');
const app = express();      

app.get('/', function(req, res) {
  res.send('Seja bem vindo ao meu web utilizando express!');
})

app.get('/sobre', function(req, res) {
  res.send ('Bem vindo ao caminho sobre');
})

app.get('/blog', function(req, res) {
  res.send('Caminho blog');
})

//So pode enviar send uma vez dentro de uma rota
app.get('/ola/:cargo/:nome', function(req, res) {
  res.send('<h1>Ola ' + req.params.nome + '</h1>' + '<h2> Seu cargo é: ' + req.params.cargo + '</h2>');
});

app.get('/:nome/:idade', function(req, res) {
  res.send('Olá' + req.params.nome + ', você tem ' + req.params.idade + 'anos');
})

app.listen(8081, function() {
  console.log("Servidor esta rodando com o fremework express!")
}); //Tem que ser a ultima linha de codigo
