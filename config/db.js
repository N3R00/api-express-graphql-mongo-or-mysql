const mysql = require("mysql2/promise");

var pool = mysql.createPool({
    host: '',
    user: '',
    password: '',
    database: ''
})

module.exports = pool;
