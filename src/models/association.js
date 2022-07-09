const cityProvince = require('./storage/cityProvince')
const customer = require('./customer/customer')
const customerType = require('./customer/customerType')
const individualCustomer = require('./customer/individualCustomer')
const corporateCustomer = require('./customer/corporateCustomer')
const country = require('./storage/country')
const doctype = require('./storage/doctype')
const sector = require('./storage/sector')
const industry = require('./storage/industry')
const accountOfficer = require('./storage/accountOfficer')
const relation = require('./storage/relation')
const currency = require('./storage/currency')
const subsector = require('./storage/subSector')

const association = () => {
    // CUSTOMER 
    // -- FkCustomer_CityProvinceId
    customer.belongsTo(cityProvince, {
        foreignKey: 'CityProvince'
    })
    cityProvince.hasMany(customer,{
        foreignKey: 'CityProvince'
    })
    // -- FkCustomer_NationalityId
    customer.belongsTo(country, {
        foreignKey: 'Nationality'
    })
    country.hasMany(customer, {
        foreignKey: 'Nationality'
    })
    // --FkCustomer_ResidenceId
    customer.belongsTo(country, {
        foreignKey: 'Residence'
    })
    country.hasMany(customer, {
        foreignKey: 'Residence'
    })
    // --FkCustomer_DoctypeID
    customer.belongsTo(doctype, {
        foreignKey: 'Doctype'
    })
    doctype.hasMany(customer, {
        foreignKey: 'Doctype'
    })
    // --FkCustomer_SectorId
    customer.belongsTo(sector, {
        foreignKey: 'MainSector',
    })
    sector.hasMany(customer, {
        foreignKey: 'MainSector'
    })
    // --FkCustomer_IndustryId
    customer.belongsTo(industry, {
        foreignKey: 'MainIndustry'
    })
    industry.hasMany(customer, {
        foreignKey: 'MainIndustry'
    })
    // --FkCustomer_IndustryId
    customer.belongsTo(industry, {
        foreignKey: 'Industry'
    })
    industry.hasMany(customer, {
        foreignKey: 'Industry'
    })
    // --FkCustomer_AccountOfficerId
    customer.belongsTo(accountOfficer, {
        foreignKey: 'AccountOfficer'
    })
    accountOfficer.hasMany(customer, {
        foreignKey: 'AccountOfficer'
    })
    // --FkCustomer_Type
    customer.belongsTo(customerType, {
        foreignKey: 'CustomerType'
    })
    customerType.hasMany(customer, {
        foreignKey: 'CustomerType'
    })
    // --FkCorporateCustomer_Relation
    customer.belongsTo(relation, {
        foreignKey: 'RelationCode'
    })
    relation.hasMany(customer, {
        foreignKey: 'RelationCode'
    })

    // INDIVIDUAL CUSTOMER 
    // --FkIndividualCustomer
    individualCustomer.belongsTo(customer,{
        foreignKey: 'CustomerID'
    })
    // --FkIndividualCustomer_SectorId
    individualCustomer.belongsTo(sector, {
        foreignKey: 'SubSector'
    })
    sector.hasMany(individualCustomer, {
        foreignKey: 'SubSector'
    })
    // --FkIndividualCustomer_Currency
    individualCustomer.belongsTo(currency, {
        foreignKey: 'Currency'
    })
    currency.hasMany(individualCustomer, {
        foreignKey: 'Currency'
    })

    // CORPORATE CUSTOMER
    corporateCustomer.belongsTo(customer, {
        foreignKey: 'CustomerID'
    })
    // --FkCorporateCustomer_SectorId
    corporateCustomer.belongsTo(sector, {
        foreignKey: 'Sector'
    })
    sector.hasMany(corporateCustomer, {
        foreignKey: 'Sector'
    })

    //SECTOR - SUBSECTOR 
    // --FkSector_Subsector
    subsector.belongsTo(sector, {
        foreignKey: 'Sector'
    })
}


module.exports = association