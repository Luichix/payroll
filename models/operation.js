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

module.exports={
  insert
}