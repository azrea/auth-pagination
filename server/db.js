//pg allows for communication between server and postgres database.
const Pool = require("pg").Pool;
//this is the pool setup
const pool = new Pool({
  user: "postgres",
  password: "antilope",
  host: "localhost",
  port: 5432,
  database: "authpage",
});

module.exports = pool;
