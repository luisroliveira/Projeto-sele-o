const express = require("express");
const router = express.Router();
const Categoria = require('../models/Categoria');

router.get('/', (req, res) => {
    res.render("admin/index");
});

router.get("/categorias", (req, res) => {
    Categoria.findAll().then((categorias) => {
        res.render("admin/categorias", {categorias: categorias})
    }) .catch((err) => {
        req.flash("error_msg", "Houve um erro ao listar as categorias!");
        res.redirect("/admin");
    })
});

router.get("/categorias/add", (req, res) => {
    res.render('admin/addcategorias')
});

router.post("/categorias/nova", (req, res) => {
    var erros = [];
    if (!req.body.nome || typeof req.body.nome == undefined || req.body.nome == null) {
        erros.push({texto: "Nome inválido"})
    }

    if (!req.body.slug || typeof req.body.slug == undefined || req.body.slug == null) {
        erros.push({texto: "Slug inválido"})
    }

    if (req.body.nome.length < 2) {
        erros.push({texto: "Nome muito pequeno"})
    }

    if(erros.length > 0) {
        res.render("admin/addcategorias", {
            erros: erros
        })
    }
    else {
        Categoria.create({
            nome: req.body.nome,
            slug: req.body.slug
        }).then(() => {
            req.flash("success_msg", "Categoria criada com sucesso!");
            res.redirect("/admin/categorias");
        }).catch((err) => {
            req.flash("erro_msg", "Erro um erro ao salvar a categoria. Tente novamente!");
            res.redirect("/admin");
        })
    }
});

router.get("/categorias/deletar/:id", (req, res) => {
    Categoria.destroy({where: {'id': req.params.id}}).then(() => {
        res.redirect("/admin/categorias");
    })
});

router.get("/categorias/edit/:id", (req, res) => {
    Categoria.findOne({where: {id: req.params.id}}).then((categoria) => {
        res.render("admin/editcategorias", {categoria: categoria})
    }).catch((err) => {
        req.flash("error_msg", "Esta categoria não existe!")
        res.redirect("/admin/categorias");
        console.log("Entrou aqui!")
    })
})

router.post("/categorias/edit", (req, res) => {
    Categoria.findOne({where: {id: req.body.id}}).then((categoria) => {

        var erros = [];
        if (!req.body.nome || typeof req.body.nome == undefined || req.body.nome == null) {
            erros.push({texto: "Nome inválido"})
        }

        if (!req.body.slug || typeof req.body.slug == undefined || req.body.slug == null) {
            erros.push({texto: "Slug inválido"})
        }

        if (req.body.nome.length < 2) {
            erros.push({texto: "Nome muito pequeno"})
        }

        if(erros.length > 0) {
            res.render("admin/categorias", {
                erros: erros
            })
        }

        else {
            categoria.update({
                nome: req.body.nome,
                slug: req.body.slug
            });
            req.flash("success_msg", "Categoria editada com sucesso!");
            res.redirect("/admin/categorias");
        }
    }).catch((err) => {
        req.flash("error_msg", "Houve um erro ao editar a categoria!")
        res.redirect("/admin/categorias");
    })
})

module.exports = router;
