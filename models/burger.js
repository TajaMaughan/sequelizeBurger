//require orm
var orm = require("../config/orm.js");

//takes input from webpage and puts it into orm functions
var burger = {
    selectAll: function(next) {
        orm.selectAll("burgers", function(res) {
            next(res);
        });
    },   
    insertOne: function(burger_name, next) {
        orm.insertOne(burger_name, function(res) {
            next(res); 
        });
    },
    updateOne: function(burgerId, next) {
        orm.updateOne(burgerId, function(res) {
            next(res);
        });
    }
}

//export for use in controller
module.exports = burger;