const Sequelize = require("sequelize");
const connection = require("../database/database");

//Criando tabela no BD usando Sequelize
const Category = connection.define('categories',{
title: {
    type: Sequelize.STRING,
    allowNull: false
},slug: {
    type: Sequelize.STRING,
    allowNull: false
    }
});


module.exports = Category;