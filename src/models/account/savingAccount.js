const { Sequelize, Model, DataTypes } = require("sequelize")
const sequelize = require('../../database/sequelize')

class SavingAccount extends Model {}

SavingAccount.init({
    Account:{
        type: DataTypes.TEXT,
        require: true,
        unique: true
    }
}, {sequelize, modelName:'SAVINGACCOUNT'})

module.exports = SavingAccount