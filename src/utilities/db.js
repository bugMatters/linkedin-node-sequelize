const {
  MYSQL_DB,
  MYSQL_USER,
  MYSQL_PASSWORD,
  MYSQL_DIALECT,
} = require("./config");

const { Sequelize } = require("sequelize");

exports.sequelize = new Sequelize(MYSQL_DB, MYSQL_USER, MYSQL_PASSWORD, {
  dialect: MYSQL_DIALECT,
  logging: false,
});
