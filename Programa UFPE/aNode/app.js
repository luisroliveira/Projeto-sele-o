//Carregando módulos
    var express = require('express');
    const handlebars = require('express-handlebars');
    const bodyParser = require('body-parser');
    const app = express();
    const admin = require("./routes/admin");
    const path = require("path");
    const session = require("express-session");
    const flash = require("connect-flash");
    //const Categoria = require('../models/Categoria');

//Configurações
    //Sessão
        app.use(session({
            secret: "cursodenode",
            resave: true,
            saveUninitialized: true
        }));
        app.use(flash());
    //Middleware
        app.use((req, res, next) => {
            res.locals.success_msg = req.flash("success_msg");
            res.locals.error_msg = req.flash("error_msg");
            next();
        })
    //HandleBars - Template engine
        app.engine('handlebars', handlebars({
            defaultLayout: 'main'
        }));
        app.set('view engine', 'handlebars');
    //Body parser - (serve para pegar os dados do formulario)
        app.use(bodyParser.urlencoded({extended: false}));
        app.use(bodyParser.json());
    //Public
        app.use(express.static(path.join(__dirname, "public")));

//Rotas
    app.use('/admin', admin);

//Outros
    const PORT = 8185;
    app.listen(PORT, () => {
        console.log('Servidor rodando!')
    });