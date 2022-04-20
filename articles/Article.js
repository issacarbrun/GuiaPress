const Sequelize = require("sequelize");
const connection = require("../database/database");
const Category = require("../categories/Category")

//Criando tabela no BD usando Sequelize
const Article = connection.define('articles',{
title: {
    type: Sequelize.STRING,
    allowNull: false
},
slug: {
    type: Sequelize.STRING,
    allowNull: false
},
body: {
    type: Sequelize.TEXT,
    allowNull: false
}
});

Category.hasMany(Article); // UMA CATEGORIA tem MUITOS ARTIGOS
Article.belongsTo(Category); // UM ARTIGO pertence a UMA CATEGORIA



module.exports = Article;