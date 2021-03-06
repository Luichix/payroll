const logger = require('../utils/logger')
const mysql = require('mysql')

function insert(connection,data, callback){
  let insertQuery = 'INSERT INTO users(username, password, fullname) VALUES (?,?,?)'
  let query = mysql.format(insertQuery, [data.username, data.password, data.fullname])
  connection.query(query, function(error, result){
    if(error) {
      logger.error('Ha ocurrido un error', error)
      return
    }
    callback(result)
  })
}

function read(connection, callback){
  connection.query('SELECT * FROM users', function (error, result){
    if(error){
      logger.error('error al recibir dator', error)
      return
    }
    callback(result)
  })
}

function update(connection, data, callback){
  const randomLetters = Math.random().toString(36).substring(7)
  const newPassword = `${randomLetters}`
  let updateQuery = 'UPDATE users SET password = ? WHERE id = ?'
  let query = mysql.format(updateQuery, [newPassword, data.username])

  connection.query(query, function(error, result){
    if(error) {
      logger.error('Ha ocurrido un error', error)
      return
    }
    callback(result)
  })
}

module.exports={
  insert,
  read,
  update
}