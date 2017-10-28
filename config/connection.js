
const mysql = require('mysql');

const connection;

if (process.env.JAWSDB_URL) {
  connection = createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123',
    database: 'burgers_db'
  });
};

connection.connect(function (err) {
  if (err) {
    console.log('error connecting:' + err.stack);
  }
  console.log('connected as id:' + connection.threadId);
});

module.exports = connection;
