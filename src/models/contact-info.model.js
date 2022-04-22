const { DataTypes } = require("sequelize");
const { sequelize } = require("../utilities/db");

const ContactInfo = sequelize.define("contactInfo", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = ContactInfo;
