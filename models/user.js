const Sequelize = require('sequelize')
const sequelize = require('../util/database')
const User = sequelize.define('tracker', {
    id: {
        type: Sequelize.INTEGER ,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    amount:Sequelize.INTEGER,
    description: Sequelize.STRING,
    category:Sequelize.STRING
    

});
//En
module.exports = User