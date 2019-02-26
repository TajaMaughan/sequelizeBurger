//set up express server
var express = require("express");
var router = express.Router();
//get db functions for use with handlebars
var db = require("../models");

//sets homepage and renders db table
router.get("/", function(req, res){
    db.Burger.findAll({}).then(function(data) {
        var hbsObject = {
            burgers: data
        };
        res.render("index", hbsObject)
    });
})

//posts new db
router.post("/burger/create", function(req, res) {
    db.Burger.create({
        burger_name: req.body.burger_name
    }).then(function(result){
        res.redirect("/");
    })
})

//devours selected db
router.put("/burger/eat/:id", function(req, res) {
    db.Burger.update({
        devoured: true
    }, {
        where: {
            id: req.body.id
        }
    }).then(function(result) {
        res.redirect("/");
    })
})

//export to server
module.exports = router;