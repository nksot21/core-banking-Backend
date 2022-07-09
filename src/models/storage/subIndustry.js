const { Sequelize, Model, DataTypes } = require("sequelize")
const sequelize = require('../../database/sequelize')

class SubIndustry extends Model {}

SubIndustry.init({
    Name: DataTypes.TEXT,
    Code: DataTypes.TEXT
}, {sequelize, modelName:'SUBINDUSTRY'})

module.exports = SubIndustry