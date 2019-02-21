//obtain connection information
var connection = require("./connection.js");
//create orm for database
var orm = {
  //select all from database
  selectAll: function (tableInput, next) {
    var queryString = "SELECT * FROM ??;";
    connection.query(queryString, [tableInput], function (err, result) {
      if (err) throw err;
      console.log(result);
      next(result);
    });
  },
  //insert a burger into the database
  insertOne: function (val, next) {
    var queryString = "INSERT INTO burgers (burger_name) VALUES (?) ";

    console.log(queryString);

    connection.query(queryString, [val], function (err, result) {
      if (err) throw err;
      next(result);
    });
  },
  //devour a burger
  updateOne: function (burgerId, next) {
    var queryString = "UPDATE burgers SET devoured = true WHERE id = ?";

    console.log(queryString);
    connection.query(queryString, [burgerId], function (err, result) {
      if (err) throw err;
      next(result);
    });
  }
}
//export to model
module.exports = orm;