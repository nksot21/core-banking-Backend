const corporateCustomerModel = require('../../models/customer/corporateCustomer')
const individualCustomerModel = require('../../models/customer/individualCustomer')
const customerModel = require('../../models/customer/customer')
const asyncHandler = require('../../utils/async')

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

        const customersDB = await customerModel.findAll({
            where: {
                CustomerType: enquiryReq.customerType,
                id: enquiryReq.customerID,
                GB_FullName: enquiryReq.GB_FullName,
                DocID: enquiryReq.docID,
                PhoneNumber: enquiryReq.phoneNumber,
                MainSector: enquiryReq.mainSector,
                SubSector: enquiryReq.subSector,
                MainIndustry: enquiryReq.mainIndustry,
                SubIndustry: enquiryReq.subIndustry
            }
        })
    })
}

module.exports = enquiryCustomerController