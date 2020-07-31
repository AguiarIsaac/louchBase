const { Pool } = require('pg')

module.exports = new Pool({
    user: 'postgres',
    password: 'dev2020',
    host: 'localhost',
    database: 'my_teacher'
})