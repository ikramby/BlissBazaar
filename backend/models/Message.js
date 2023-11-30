const { Sequelize, DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {

const Message = sequelize.define('Message', {
  fullName: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  subject: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  date: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW,
    allowNull: true,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});



return Message;
};