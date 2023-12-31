const cors = require('cors')
const helmet = require('helmet')
const morgan = require('morgan')
const express = require('express')
const bodyParser = require('body-parser')
require('dotenv').config()


const app = express()
const port = process.env.PORT
const routes = require('./routes/routes')
const { errorLogger } = require('./middleware/errorLogger')

// setting upt the middlewares
app.use(cors())
app.use(helmet())
app.use(morgan('tiny'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use('/api/v1/', routes)
app.use(errorLogger)


const server = app.listen(port, ()=>{
    console.log(`Student Fee Management API server is running on: http://127.0.0.1:${port}/api/v1`);
})

module.exports = server