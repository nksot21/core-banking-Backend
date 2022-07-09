const customerModel = require('../../models/customer/customer')
const customerTypeModel = require('../../models/customer/customerType')
const individualCustomerModel = require('../../models/customer/individualCustomer')
const constValue = require('../const')
const asyncHandler = require('../../utils/async')
const appError = require('../../utils/appError')
const AppError = require('../../utils/appError')

// gtri request(Name) => BE: search ID => luu tru foreignKey = id
// gtri request(ID) => FE: lay value cho <option> la ID + hien thi <option> la Name
const individualCustomerController = {
    create: asyncHandler( async (req, res, next) => {
        const customerReq = {
            FirstName: req.body.firstName,
            LastName: req.body.lastName,
            MiddleName: req.body.middleName,
            GB_ShortName: req.body.GB_ShortName,
            GB_FullName: req.body.GB_FullName,
            Birthday: req.body.birthday,
            MobilePhone: req.body.mobilePhone,
            EmailAddress: req.body.emailAddress,
            SubSector: req.body.subSector,
            GB_Street: req.body.GB_Street,
            GB_Towndist: req.body.GB_Towndist,
            GB_Country: req.body.GB_Country,
            CityProvince: req.body.cityProvince,
            Nationality: req.body.nationality,
            Residence: req.body.residence,
            Doctype: req.body.doctype,
            DocID: req.body.docID,
            DocIssuePlace: req.body.docIssuePlace,
            DocIssueDate: req.body.docIssueDate,
            DocExpiryDate: req.body.docExpiryDate,
            MainSector: req.body.mainSector,
            MainIndustry: req.body.mainIndustry,
            Industry: req.body.industry,
            AccountOffice: req.body.accountOfficer,
            Gender: req.body.gender,
            Title: req.body.title,
            MaritalStatus: req.body.maritalStatus,
            ContactDate: req.body.contactDate,
            RelationCode: req.body.relationCode,
            OfficeNumber: req.body.officeNumber,
            FaxNumber: req.body.faxNumber,
            DependantsNo: req.body.dependantsNo,
            ChildUnder15: req.body.childUnder15,
            Childfr15to25: req.body.childfr15to25,
            ChildOver25: req.body.childOver25,
            HomeOwnership: req.body.homeOwnership,
            ResidenceType: req.body.residenceType,
            EmploymentStatus: req.body.employmentStatus,
            CompanyName: req.body.companyName,
            Currency: req.body.currency,
            MonthlyIncome: req.body.monthlyIncome,
            OfficeAddress: req.body.officeAddress,
            Liability: req.body.customerLiability
        }

        /*if(!customerReq.GB_ShortName || !customerReq.GB_FullName || !customerReq.Birthday ||
            !customerReq.GB_Street || !customerReq.GB_Towndist || !customerReq.CityProvince || 
            !customerReq.Doctype || !customerReq.DocID || !customerReq.DocIssuePlace ||
            !customerReq.DocIssueDate || !customerReq.MainSector || !customerReq.SubSector ||
            !customerReq.MainIndustry || !customerReq.Industry){
                return next(new AppError("Enter required fields!", 400))
        }*/

        const newCustomer = await customerModel.create({
            GB_Street: customerReq.GB_Street,
            GB_Towndist: customerReq.GB_Towndist,
            GB_Country: customerReq.GB_Country,
            DocID: customerReq.DocID,
            DocIssuePlace: customerReq.DocIssuePlace,
            DocExpiryDate: customerReq.DocExpiryDate,
            CompanyBook: customerReq.CompanyName,
            Liability: customerReq.Liability,
            CityProvince: customerReq.CityProvince,
            Nationality: customerReq.Nationality,
            Residence: customerReq.Residence,
            Doctype: customerReq.Doctype,
            MainSector: customerReq.MainSector,
            MainIndustry: customerReq.MainIndustry,
            Industry: customerReq.Industry,
            AccountOfficer: customerReq.AccountOffice,
            CustomerType: constValue.customer.individualCustomer,
            RelationCode: customerReq.RelationCode
        })

        const customerID = newCustomer.getDataValue("id")
        const newIndividualCustomer = await individualCustomerModel.create({
            FirstName: customerReq.FirstName,
            LastName: customerReq.LastName,
            MiddleName: customerReq.MiddleName,
            GB_ShortName: customerReq.GB_ShortName,
            GB_FullName: customerReq.GB_FullName,
            Birthday: customerReq.Birthday,
            MobilePhone: customerReq.MobilePhone,
            EmailAddress: customerReq.EmailAddress,
            CustomerID: customerID,
            SubSector: customerReq.SubSector,
            Currency: customerReq.Currency
        })

        return res.status(200).json({
            message: "inserted",
            data: {
                customer: newCustomer,
                individualCustomer: newIndividualCustomer
            }
        })
    }),

    getAll: asyncHandler(async (req, res, next) => {
        const {rows, count} = await individualCustomerModel.findAndCountAll({
            //where: {CustomerType: constValue.customer.individualCustomer},
            include: [{
                model: customerModel
            }]
        })

        return res.status(200).json({
            message: "get all posts",
            data: {
                quantity: count,
                customers: rows
            }
        })
    }),

    // MSKH
    findByID: async () => {},
    // bo sung mot so dieu kien tim kiem

    
    update: asyncHandler(async (req, res, next) => {
        const customerIDReq = req.params.id 
        const customerReq = {
            FirstName: req.body.firstName,
            LastName: req.body.lastName,
            MiddleName: req.body.middleName,
            GB_ShortName: req.body.GB_ShortName,
            GB_FullName: req.body.GB_FullName,
            Birthday: req.body.birthday,
            MobilePhone: req.body.mobilePhone,
            EmailAddress: req.body.emailAddress,
            SubSector: req.body.subSector,
            GB_Street: req.body.GB_Street,
            GB_Towndist: req.body.GB_Towndist,
            GB_Country: req.body.GB_Country,
            CityProvince: req.body.cityProvince,
            Nationality: req.body.nationality,
            Residence: req.body.residence,
            Doctype: req.body.doctype,
            DocID: req.body.docID,
            DocIssuePlace: req.body.docIssuePlace,
            DocIssueDate: req.body.docIssueDate,
            DocExpiryDate: req.body.docExpiryDate,
            MainSector: req.body.mainSector,
            MainIndustry: req.body.mainIndustry,
            Industry: req.body.industry,
            AccountOffice: req.body.accountOfficer,
            Gender: req.body.gender,
            Title: req.body.title,
            MaritalStatus: req.body.maritalStatus,
            ContactDate: req.body.contactDate,
            RelationCode: req.body.relationCode,
            OfficeNumber: req.body.officeNumber,
            FaxNumber: req.body.faxNumber,
            DependantsNo: req.body.dependantsNo,
            ChildUnder15: req.body.childUnder15,
            Childfr15to25: req.body.childfr15to25,
            ChildOver25: req.body.childOver25,
            HomeOwnership: req.body.homeOwnership,
            ResidenceType: req.body.residenceType,
            EmploymentStatus: req.body.employmentStatus,
            CompanyName: req.body.companyName,
            Currency: req.body.currency,
            MonthlyIncome: req.body.monthlyIncome,
            OfficeAddress: req.body.officeAddress,
            Liability: req.body.customerLiability
        }

        const customerDB = await customerModel.findOne({where: {id: customerIDReq}})
        if( !customerDB ){
            return next(new AppError("Customer doesnot existed!"))
        }

        const customerUpdated = await customerDB.update({
            GB_Street: customerReq.GB_Street,
            GB_Towndist: customerReq.GB_Towndist,
            GB_Country: customerReq.GB_Country,
            DocID: customerReq.DocID,
            DocIssuePlace: customerReq.DocIssuePlace,
            DocExpiryDate: customerReq.DocExpiryDate,
            CompanyBook: customerReq.CompanyName,
            Liability: customerReq.Liability,
            CityProvince: customerReq.CityProvince,
            Nationality: customerReq.Nationality,
            Residence: customerReq.Residence,
            Doctype: customerReq.Doctype,
            MainSector: customerReq.MainSector,
            MainIndustry: customerReq.MainIndustry,
            Industry: customerReq.Industry,
            AccountOfficer: customerReq.AccountOffice,
            CustomerType: constValue.customer.individualCustomer,
            RelationCode: customerReq.RelationCode
        })

        const individualCustomerDB = await individualCustomerModel.findOne({where: {CustomerID: customerIDReq}})
        if( !individualCustomerDB ){
            return next(new AppError("error", 404))
        }
        const individualCustomerUpdate = await individualCustomerDB.update({
            FirstName: customerReq.FirstName,
            LastName: customerReq.LastName,
            MiddleName: customerReq.MiddleName,
            GB_ShortName: customerReq.GB_ShortName,
            GB_FullName: customerReq.GB_FullName,
            Birthday: customerReq.Birthday,
            MobilePhone: customerReq.MobilePhone,
            EmailAddress: customerReq.EmailAddress,
            SubSector: customerReq.SubSector,
            Currency: customerReq.Currency
        })

        return res.status(200).json({
            message: "updated",
            data: {
                individualCustomer: individualCustomerUpdate,
                customer: customerUpdated
            }
        })
    }),
    delete: asyncHandler( async (req, res, next) => {
        const customerIDReq = req.params.id
        
        const resultindi = await individualCustomerModel.destroy({
            where: {CustomerID: customerIDReq}
        })

        const result = await customerModel.destroy({
            where: {id: customerIDReq}
        })


        return res.status(200).json({
            message: "deleted",
            data: {
                result: result,
                resultIndi: resultindi
            }
        })
    })
}

module.exports = individualCustomerController