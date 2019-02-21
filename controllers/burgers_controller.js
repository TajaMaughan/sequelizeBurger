//set up express server
var express = require("express");
var router = express.Router();
//get burger functions for use with handlebars
var burger = require("../models/burger.js");

//sets homepage and renders burger table
router.get("/", function(req, res){
    burger.selectAll(function(data) {
        var hbsObject = {
            burgers: data
        };
        res.render("index", hbsObject)
    });
})

//posts new burger
router.post("/burger/create", function(req, res) {
    burger.insertOne([req.body.burger_name], function(result){
        res.redirect("/");
    })
})

//devours selected burger
router.post("/burger/eat/:id", function(req, res) {
    burger.updateOne([req.params.id], function(result) {
        res.redirect("/");
    })
})

//export to server
module.exports = router;