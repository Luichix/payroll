const config = require('./utils/config')
const express = require('express')
require('express-async-error')
const app = express()
const cors = require('cors')
const usersRouter = require('./controllers/user')
const loginRouter = require('./controllers/login')
const middleware = require('./utils/middleware')
const logger = require('./utils/logger')
const mysql = require('mysql')
const { insert } = require('./models/operation')

logger.info('connecting to', config.MySQL.database.database)


const connection = mysql.createConnection(config.MySQL.database)

connection.connect(function(error) {
  if(error){
    logger.error('error connecting to MySQL', error.stack)
    return
  }
  logger.info('connecting to MySQL', connection.threadId)
})

app.use(cors())
app.use(express.static('build'))
app.use(express.json( { limit: '50mb' }))
app.use(express.urlencoded({ limit: '50mb', extended: true }))
app.use(middleware.requestLogger)


app.get('/insert', (request, response) => {
  insert(connection,{ username: 'Manu', password: 'kirito', fullname: 'Manu Rex' },
    result => {
      response.json(result)
    })
})
app.use('/api/users', usersRouter)
app.use('/api/login', loginRouter)

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app