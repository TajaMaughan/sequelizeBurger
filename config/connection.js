//enable .env file for use
require("dotenv").config();
//gets password from .env
var password = process.env.PASSWORD;
//MySQL connection
var mysql = require("mysql");
var connection;
//if JawsDB detected connect there, else connect to local db
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: password,
    database: "burgers_db"
});
}

connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

//exports connection for our ORM to use.
module.exports = connection;