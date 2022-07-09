const express = require("express")
const route = express.Router()

const corporateCustomerController = require('../controllers/customer/corporateCustomer')
const individualCustomerController = require('../controllers/customer/individualCustomer')

route.post('/create_individual_customer', individualCustomerController.create)
route.get('/get_all_individual_customer', individualCustomerController.getAll)
route.put('/update_individual_customer/:id', individualCustomerController.update)
route.delete('/delete_individual_customer/:id', individualCustomerController.delete )

route.post('/create_corporate_customer', corporateCustomerController.create)

module.exports=route