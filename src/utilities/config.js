require("dotenv").config();

module.exports = {
  // # App
  APP_PORT: process.env.APP_PORT,
  APP_HOST: process.env.APP_HOST,

  //Database
  MYSQL_HOST: process.env.DATABASE_HOST,
  MYSQL_PORT: process.env.DATABASE_PORT,
  MYSQL_USER: process.env.DATABASE_USERNAME,
  MYSQL_PASSWORD: process.env.DATABASE_PASSWORD,
  MYSQL_DIALECT: process.env.DATABASE_DIALECT,
  MYSQL_DB: process.env.DATABASE_NAME,
  MYSQL_POOL_SIZE: process.env.DATABASE_POOL_SIZE,
};
