var express = require("express");

var router = express.Router();

var burgers = require("../models/burger.js");

router.get("/", function(req, res) {
  burgers.selectAll(function(data) {
    var hbsObject = {
      burgers: data
    };
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function(req, res) {
  burger_name = req.body.burger_name;
  burgers.insertOne(burger_name, function(result) {
    console.log(result);
  });
});

router.put("/api/burgers/:id", function(req, res) {
  var id = req.body.id
  burgers.updateOne(id, function(result) {
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    };
  });
});

router.put("/api/burgers", function(req, res){
  var devoured = req.body.devoured
  burgers.updateAll(devoured, function(data){
    console.log(data);
  });
});


module.exports = router;
