const corporateCustomerModel = require('../../models/customer/corporateCustomer')
const individualCustomerModel = require('../../models/customer/individualCustomer')
const customerModel = require('../../models/customer/customer')
const asyncHandler = require('../../utils/async')
const sequelize = require('../../database/sequelize')
const appError = require('../../utils/appError')

// customerType
// customerID
// GBFullName
// CellPhone/ OfficeNum
// DocID
// MainSector => SubSector
// Main Industry => SubIndustry

const enquiryCustomerController = {
    enquiry: asyncHandler(async (req, res, next) => {
        const enquiryReq = {
            customerType: req.body.customerType,
            customerID: req.body.customerID,
            GB_FullName: req.body.GB_FullName,
            phoneNumber: req.body.phoneNumber,
            docID: req.body.docID,
            mainSector: req.body.mainSector,
            subSector: req.body.subSector,
            mainIndustry: req.body.mainIndustry,
            subIndustry: req.body.subIndustry
        }

        /*const enquiryCondition = {}
        if(!customerType)*/   
        
        let enquiryString = 'Select * from CUSTOMER where '
        if(enquiryReq.customerType){
            enquiryString += 'CustomerType = ' + enquiryReq.customerType
        }
        if(enquiryReq.customerID){
            enquiryString += ' AND id = ' + enquiryReq.customerType
        }
        if(enquiryReq.GB_FullName){
            enquiryString += ' AND GB_FullName = ' + enquiryReq.GB_FullName
        }
        if(enquiryReq.phoneNumber){
            enquiryString += ' AND PhoneNumber = ' + enquiryReq.phoneNumber
        }
        if(enquiryReq.docID){
            enquiryString += ' AND DocID = ' + enquiryReq.docID
        }
        if(enquiryReq.mainSector){
            enquiryString += ' AND MainSector = ' + enquiryReq.mainSector
        }
        if(enquiryReq.subSector){
            enquiryString += ' AND SubSector = ' + enquiryReq.subSector
        }
        if(enquiryReq.mainIndustry){
            enquiryString += ' AND MainIndustry = ' + enquiryReq.mainIndustry
        }
        if(enquiryReq.subIndustry){
            enquiryString += ' AND Industry = ' + enquiryReq.customerType
        }
        
        const customersDB = await sequelize.query(enquiryString,{
            model: customerModel
        })

        if(!customersDB.length){
            return next(new appError("No result!", 400))
        }

        return res.status(200).json({
            message: "customers result",
            data: customersDB
        })
    })
}

module.exports = enquiryCustomerController