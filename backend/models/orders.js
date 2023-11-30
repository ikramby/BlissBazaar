const { DataTypes } = require('sequelize');
const Product = require('./product'); 

module.exports = (sequelize) => {
  const Order = sequelize.define('Order', {
    totalPrice: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    fullName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phoneNumber: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isEightDigits: (value) => {
          if (value.toString().length !== 8) {
            throw new Error('Phone number must be exactly 8 digits.');
          }
        },
      },
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

//   // Define associations
//   Order.hasMany(Product, { as: 'products', foreignKey: 'orderId' });

  return Order;
};
