const { Sequelize, Model, DataTypes } = require("sequelize")
const sequelize = require('../../database/sequelize')

class SavingAccountType extends Model {}

SavingAccountType.init({
    Name: DataTypes.TEXT
}, {sequelize, modelName:'SAVINGACCOUNTTYPE'})

module.exports = SavingAccountType