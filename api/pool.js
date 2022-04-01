const mysql = require('mysql')
const config = require('../utils/config')

const pool = mysql.createPool(config.MySQL.database)

module.exports ={
  pool
}