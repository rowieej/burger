//setup code to connect to MySQL

var mysql = require('mysql');
var keys = require('./keys');
var jaws = require('./jaws');
var source = {
  localhost: {
    port: 3306,
    host: 'localhost',
    user: keys.user,
    password: keys.password,
    database: 'burgers_db'
  },

  jawsDB:{ 
    port: 3306,
    host: 'gx97kbnhgjzh3efb.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user: jaws.user,
    password: jaws.password,
    database: 'qddd9fhcxfl74n0x'
  }
}

var connection = mysql.createConnection( source.jawsDB );


connection.connect(function (err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as id ' + connection.threadId);
});

module.exports = connection;
