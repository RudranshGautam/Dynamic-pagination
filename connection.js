const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'rudransh@1', // Replace with your actual MySQL password
    database: 'ww'
});

module.exports = pool.promise();
