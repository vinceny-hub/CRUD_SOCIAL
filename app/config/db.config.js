// module.exports = {
// //   HOST: "us-cdbr-east-04.cleardb.com",
// //   USER: "bc01683a59f1ae",
// //   PASSWORD: "39e9e7c0e4",
// //   DB: "heroku_3b2b8dfa8d264d5",
// //   dialect: "mysql",
// //   pool: {
// //     max: 5,
// //     min: 0,
// //     acquire: 30000,
// //     idle: 10000

//   }
// };

const mysql = require("mysql");
const dbConfig = require("../config/db.config.js");

var connection = mysql.createPool({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB

});

module.exports = connection;