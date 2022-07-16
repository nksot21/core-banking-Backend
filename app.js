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
app.use(bodyParser.urlencoded({extended: true}))


//SET UP DOTENV 
require('dotenv').config()

//DATABASE CONNECTION
database.connection.isConnected()
database.connection.migrate()

//SET UP STATIC FILE
app.use(express.static('public'))

//REQUIRE ROUTE
const authenMiddleware = require('./src/middlewares/authen')
const userRoute = require('./src/routes/user')
const customerRoute = require('./src/routes/customer')
const storageRoute = require('./src/routes/storage')
const signatureRoute = require('./src/routes/signature')

//ROUTE DECLARATION
app.use('/user', userRoute)
app.use('/customer', authenMiddleware, customerRoute)
app.use('/storage', authenMiddleware, storageRoute)
app.use('/signature',authenMiddleware, signatureRoute)

//HOST CONNECTION
app.listen(8080, () => {
    console.log("CONNECTED")
})
