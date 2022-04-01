const usersRouter = require('express').Router()
const { pool } = require('../api/pool')
const { insert, read } = require('../models/users')

// usersRouter.get('/', async (request, response) => {
//   const users = await User.find({})
//   response.json(users)
// })

usersRouter.get('/', (request, response) => {
  read(pool, result => {
    response.json(result)
  })
})

usersRouter.post('/', (request, response) => {
  insert(pool,{ username: 'Manu', password: 'kirito', fullname: 'Manu Rex' },
    result => {
      response.json(result)
    })
})


module.exports = usersRouter