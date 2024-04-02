const mysql = require("mysql");

const db = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "1010da@#$G",
  database: "nexmarket",
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to the mysql database:", err);
  } else {
    console.log("connected to mysql database successfully");
  }
});

module.exports = db;
