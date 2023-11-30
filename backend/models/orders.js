const { DataTypes } = require('sequelize');
const Product = require('./product'); // Assuming your Product model is in the same directory

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
      type: DataTypes.STRING,
      allowNull: false,
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
