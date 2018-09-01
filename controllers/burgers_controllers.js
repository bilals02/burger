var express = require("express");

var router = express.Router();

//Import Model (burger.js) to use its database functions
var burger = require("../models/burger.js");

//Route creation and setup logic within these routes when required
router.get("/", function (req, res) {
    burger.all(function(data){
        var hbsObject = {
            burger: data
        };
        console.log(hbsObject);
        res.render("index")
    });
});

router.post("api/burger", function(req, res) {
    burger.create([
        "burgerName", "devoured"
    ], [
        req.body.burgerName, req.body.devoured
    ], function(result) {
        // Send back the ID of the new burger
        res.json ({ id: result.insertId });
    });
});

router.put("/api/burger/:id", function(req, res) {
    var condition = "id " + req.params.id;
    
    console.log("condition", condition);

    burger.update ({
        burgerName: req.body.burgerName
    }, condition, function (result) {
        if (result.changedRows == 0) {
            //if no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;