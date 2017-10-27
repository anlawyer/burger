
const connection = require('./connection.js');

var orm = {
  selectAll: function (table, cb) {
    var queryString = 'SELECT * FROM ??';
    connection.query(queryString, [table], function (err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  insertOne: function (table, column, val, cb) {
    var queryString = 'INSERT INTO ?? (??) VALUES (?)';
    connection.query(queryString, [table, column, val], function (err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  updateOne: function (table, colName, valName, condition, cb) {
    var queryString = 'UPDATE ?? SET ?? = ? WHERE id = ?';
    connection.query(queryString, [table, colName, valName, condition],
      function (err, result) {
        if (err) throw err;
        cb(result);
      });
  }
};

module.exports = orm;
