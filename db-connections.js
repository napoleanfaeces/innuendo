var mysql = require('mysql');
var connection = mysql.createConnection ({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'cdev',
    database: 'song_database'
});

connection.connect(err => { // test out connection and console.log error if there is one
    if (err) throw err;
    console.log('Connected to database.');
});

module.exports = connection;