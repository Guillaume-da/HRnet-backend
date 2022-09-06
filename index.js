const express = require('express')
const app = express()
require('./db/dbConfig')
require('dotenv').config()

const employeesRoutes = require('./controllers/employeesController')
const bodyParser = require('body-parser')
const cors = require('cors')
console.log(process.env.DATABASE)
app.use(bodyParser.json())
app.use(cors())
app.use('/employees', employeesRoutes)

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server listening`)
})