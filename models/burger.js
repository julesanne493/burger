// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burgers = {
  selectAll: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },

  insertOne: function(burger_name, cb) {
    orm.insertOne("burgers", ["burger_name"], burger_name, function(res) {
    cb(res)
    });
  },
  updateOne: function(id, cb) {
    condition = "id=" + id;
    orm.updateOne("burgers", condition, function(res) {
      cb(res);
    });
  },
};

module.exports = burgers;