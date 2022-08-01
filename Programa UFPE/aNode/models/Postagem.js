const db = require('./db');
const Categoria = require('./Categoria');

const Postagem = db.sequelize.define('postagens', {
    titulo: {
        type: db.Sequelize.STRING
    },
    slug: {
        type: db.Sequelize.STRING
    },
    descricao: {
        type: db.Sequelize.STRING
    },
    conteudo: {
        type: db.Sequelize.STRING
    }
})

Postagem.belongsTo(Categoria, {
    constraint: true,
    foreignKey: "categoria"
})

//Postagem.sync({force: true}); //Adicionando uma tabela ao bando de dados blogapp

module.exports = Postagem;