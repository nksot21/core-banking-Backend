const { Sequelize, Model, DataTypes } = require("sequelize")
const sequelize = require('../../database/sequelize')

class ArrearSA extends Model {}

ArrearSA.init({
    AccountTitle: {
        type: DataTypes.TEXT,
        require: true
    },
    ShortTitle: DataTypes.TEXT,
    Notes: DataTypes.TEXT
}, {sequelize, modelName:'ARREAR_SA'})

module.exports = ArrearSA