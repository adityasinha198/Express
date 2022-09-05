const Sequelize = require('sequelize')
const sequelize = require('../util/database')
const User = sequelize.define('form', {
    id: {
        type: Sequelize.INTEGER ,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name:Sequelize.STRING,
    email: Sequelize.STRING,
    number:Sequelize.INTEGER
    

});

module.exports = User