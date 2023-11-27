const { Sequelize, DataTypes } = require('sequelize');module.exports = (sequelize, DataTypes) => {
    const Cart = sequelize.define('Cart', {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
    });
  
    // Add the iduser column as a foreign key
   // Cart.belongsTo(sequelize.models.User, {
     // foreignKey: {
     //   allowNull: true, // Set to false if you want to enforce the foreign key constraint
       // type: DataTypes.INTEGER,
       // field: 'iduser', // Specify the column name in the database
      //},
 //   });
  
    return Cart;
  };