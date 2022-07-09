const { Sequelize, Model, DataTypes } = require("sequelize")
const sequelize = require('../../database/sequelize')

class DebitAccount extends Model {}

DebitAccount.init({
    Account:{
        type: DataTypes.TEXT,
        require: true,
        unique: true
    },
    CardNumber: {
        type: DataTypes.TEXT,
        require: true,
        unique: true
    },
    AccountTitle: DataTypes.TEXT,
    ShortTitle: DataTypes.TEXT,
     JoinNote: DataTypes.TEXT
}, {sequelize, modelName:'DEBITACCOUNT'})

module.exports = DebitAccount