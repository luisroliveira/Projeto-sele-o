const Sequelize = require ('sequelize');
const sequelize = new Sequelize('test', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});
//                                 nome tabela
const Postagem = sequelize.define('postagens', { //definir uma tabela 
    titulo: {
        type: Sequelize.STRING //tipo varchar
    },
    conteudo: {
        type: Sequelize.TEXT //tipo texto
    }
});

//Criar uma postagem
/*Postagem.create({
    titulo: "UM TITULO QUALQUER",
    conteudo: "UM CONTEUDO QUALQUER"
})*/

const Usuario = sequelize.define('usuarios', {
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER 
    },
    email: {
        type: Sequelize.STRING
    }
})

//Criar um usuario
Usuario.create ({
    nome: 'Luis Felipe',
    sobrenome: 'Oliveira',
    idade: 19,
    email: 'lfro2@cin.ufpe.br'
});

//Para criar as tabelas
//Usuario.sync({force: true});
//Postagem.sync({force: true});

//authenticate é para abrir o sql. Caso não abra, ativa a função then, se nao a função catch
/*sequelize.authenticate().then(function() {
    console.log("Conectado com sucesso!");
}).catch(function(erro) {
    console.log("Falha ao se conectar: "+ erro);
})*/