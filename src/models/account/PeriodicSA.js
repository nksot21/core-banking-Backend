const { Sequelize, Model, DataTypes } = require("sequelize")
const sequelize = require('../../database/sequelize')

class PeriodicSA extends Model {}

PeriodicSA.init({
    AccountTitle: {
        type: DataTypes.TEXT,
        require: true
    },
    ShortTitle: DataTypes.TEXT,
    Notes: DataTypes.TEXT
}, {sequelize, modelName:'PERIODIC_SA'})

module.exports = PeriodicSA