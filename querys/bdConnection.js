var mysql = require('mysql');

var bdConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "87492012",
  database: "proj_amigooculto"
});

bdConnection.connect((err) => {
  if (err) throw err;
  con.query("CREATE TABLE IF NOT EXISTS ", (err, result, fields) => {
    if (err) throw err;
    console.log(result);
  });
});