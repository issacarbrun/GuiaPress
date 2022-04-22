const Sequelize = require("sequelize");
const connection = require("../database/database");

//Criando tabela no BD usando Sequelize
const User = connection.define('users',{
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },password: {
        type: Sequelize.STRING,
        allowNull: false
    }
});


module.exports = User