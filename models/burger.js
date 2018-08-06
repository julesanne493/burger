// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burgers = {
  selectAll: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },

  insertOne: function(burger_name, cb) {
    orm.insertOne("burgers", ["burger_name"], [burger_name], cb)
  },
  updateOne: function(id, cb) {
    orm.updateOne("burgers", id, function(res) {
      cb(res);
    });
  },
};

module.exports = burgers;