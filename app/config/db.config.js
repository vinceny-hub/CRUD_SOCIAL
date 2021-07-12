module.exports = {
  HOST: "us-cdbr-east-04.cleardb.com",
  USER: "bc01683a59f1ae",
  PASSWORD: "39e7c0e4",
  DB: "heroku_3b2b8dfa8d264d5",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};