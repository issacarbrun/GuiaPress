const express = require('express');
const router = express.Router();
const Article = require('./Article')
const Category = require('../categories/Category');
const { default: slugify } = require('slugify');

router.get("/articles", (req,res) => {
    res.send("ROTA ARTIGOS")
});

router.get("/admin/articles/new", (req, res) => {
    Category.findAll().then(categories => {
        res.render("admin/articles/new",{categories: categories})
    })
    
});

router.post("/articles/save", (req,res) =>{
    var title = req.body.title;
    var body = req.body.body;
    var category = req.body.category;

    Article.create({
        title: title,
        slug: slugify(title),
        body: body,
        categoryId: category
    }).then()
});

module.exports = router;