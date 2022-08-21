var mysql = require('mysql');
var connection = mysql.createConnection ({
    host: 'innuendo.cotvn74tzt9a.us-east-1.rds.amazonaws.com',
    port: '3306',
    user: 'admin',
    password: 'password',
    database: 'song_database'
});

connection.connect(err => { // test out connection and console.log error if there is one
    if (err) throw err;
    console.log('Connected to database.');
});

module.exports = connection;
