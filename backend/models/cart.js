// models/cart.js
const { DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const Cart = sequelize.define('Cart', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1, // Set a default value if needed
    },
  });

  return Cart;
};
