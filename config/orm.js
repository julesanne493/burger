var connection = require("./connection.js");

var orm = {
  selectAll: function(cb) {
    //var queryString = "SELECT * FROM burgers";
    connection.query("SELECT * FROM burgers;", function(err, result) {
      if (err) {
        throw err;}
      cb(result);
    }); 
  },

  insertOne: function(burgerName) {
      var queryString = "INSERT INTO burgers (burger_name)" + VALUES;
        queryString += "(";
        queryString += "BURGER NAME FROM HTML";
        queryString += ")";

      connectionquery(queryString, function(err, result){
        if(err){
          throw(err)
        };
        cb(result);
      })
  },

  updateOne: function (burgerName, devouredStatus) {
      var queryString = "UPDATE burgers SET devoured =";
      queryString += "true";
      queryString += " WHERE burger_name =";
      queryString += "BURGER NAME FROM HTML"
      connectionquery(queryString, function(err, result){
        if(err){
          throw(err)
        };
        cb(result);
      })
  }
};

module.exports = orm;
