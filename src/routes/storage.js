const express = require("express")
const route = express.Router()

const currencyController = require('../controllers/storage/currency')
const accountOfficerController = require('../controllers/storage/accountOfficer')
const cityProvinceController = require('../controllers/storage/cityProvince')
const countryController = require('../controllers/storage/country')
const doctypeController = require('../controllers/storage/doctype')
const industryController = require('../controllers/storage/industry')
const relationController = require('../controllers/storage/relation')
const sectorController = require('../controllers/storage/sector')
const categoryController = require('../controllers/storage/category')
const chargeCodeController = require('../controllers/storage/chargeCode')
const productLineController = require('../controllers/storage/productLine')

route.get('/get_currency', currencyController.getAll)
route.get('/get_account_officer', accountOfficerController.getAll)
route.get('/get_city_province', cityProvinceController.getAll)
route.get('/get_country', countryController.getAll)
route.get('/get_doctype', doctypeController.getAll)
route.get('/get_industry', industryController.getAll)
route.get('/get_relation', relationController.getAll)
route.get('/get_sector', sectorController.getAll)
route.get('/get_category', categoryController.getAll)
route.get('/get_charge_code', chargeCodeController.getAll)
route.get('/get_product_line', productLineController.getAll)


module.exports = route