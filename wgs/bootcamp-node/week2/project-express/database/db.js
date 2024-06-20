const {Pool} = require('pg');

const pool = new Pool({
  host: 'localhost',
  port: '5432',
  database: 'db_bootcamp',
  user: 'postgres',
  password: 'michels05'
})

module.exports = pool;