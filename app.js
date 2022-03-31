const config = require('./utils/config')
const express = require('express')
require('express-async-error')
const app = express()
const cors = require('cors')
const usersRouter = require('./controllers/user')
const loginRouter = require('./controllers/login')
const middleware = require('./utils/middleware')
const logger = require('./utils/logger')
const mongoose = require('mongoose')
const mysql = require('mysql')

logger.info('connecting to', config.MONGODB_URI)
logger.info('connecting to', config.MySQL.database.host)


mongoose.connect(config.MONGODB_URI)
  .then(() => {
    logger.info('connected to MongoDB')
  })
  .catch((error) => {
    logger.error('error connecting to MongoDB', error.message)
  })

const conexion = mysql.createConnection(config.MySQL.database)

conexion.connect(function(error) {
  if(error){
    logger.error('error connecting to MySQL', error.stack)
    return
  }
  logger.info('connecting to MySQL', conexion.threadId)
})

app.use(cors())
app.use(express.static('build'))
app.use(express.json( { limit: '50mb' }))
app.use(express.urlencoded({ limit: '50mb', extended: true }))
app.use(middleware.requestLogger)

app.use('/api/users', usersRouter)
app.use('/api/login', loginRouter)

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app