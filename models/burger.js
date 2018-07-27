var orm = require ("../config/orm.js");

var burgers = {
  selectAll: function(cb) {
    orm.selectAll(function(result) {
      cb(result);
    });
  },
  insertOne: function(tableInput, colToAdd, burgerName, cb) {
    orm.insertOne("burgers", vals, function(result) {
      cb(result);
    });
  },
  updateOne: function(objColVals, condition, cb) {
    orm.updateOne("burgers", objColVals, condition, function(result) {
      cb(result);
    });
  },
};

module.exports = burgers;
