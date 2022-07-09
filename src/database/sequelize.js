const { Sequelize } = require('sequelize');

const connection = {
    host: process.env.HOST,
    dialect: process.env.DIALECT,
    databaseName: process.env.DATABASE_NAME,
    user: process.env.USER
}
require('dotenv').config()
console.log(process.env.DIALECT)

const sequelize= new Sequelize('corebanking', 'root', null, {
    host: 'localhost',
    dialect: 'mysql',
    define:{
      freezeTableName: true
    }
  });

module.exports = sequelize