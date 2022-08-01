const db = require('./db');

const Post = db.sequelize.define('postagens', {
    titulo: {
        type: db.Sequelize.STRING
    },
    conteudo: {
        type: db.Sequelize.TEXT
    }
})

//Post.sync({force: true}); //Adicionando uma tabela ao bando de dados postapp

module.exports = Post;