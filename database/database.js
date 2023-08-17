const Sequelize = require('sequelize');

const connection = new Sequelize('guiaperguntas', 'root', '250312', {
    host: 'localhost', 
    dialect: 'mysql'
});

module.exports = connection;