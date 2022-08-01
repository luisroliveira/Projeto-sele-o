const db = require('./db');

const Categoria = db.sequelize.define('Categoria', {
    nome: {
        type: db.Sequelize.STRING
    },
    slug: {
        type: db.Sequelize.TEXT
    }
})

//Categoria.sync({force: true}); //Adicionando uma tabela ao bando de dados postapp

module.exports = Categoria;