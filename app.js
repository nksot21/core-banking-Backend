const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const database = require('./src/database/connection')

app.use(cors())

//SET UP BODY-PARSER
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());


//SET UP DOTENV 
require('dotenv').config()

//DATABASE CONNECTION
database.connection.isConnected()
database.connection.migrate()

//REQUIRE ROUTE
const userRoute = require('./src/routes/user')
const customerRoute = require('./src/routes/customer')
const storageRoute = require('./src/routes/storage')

//ROUTE DECLARATION
app.use('/user', userRoute)
app.use('/customer', customerRoute)
app.use('/storage', storageRoute)

//HOST CONNECTION
app.listen(8080, () => {
    console.log("CONNECTED")
})
