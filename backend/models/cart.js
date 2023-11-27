module.exports = (sequelize, DataTypes) => {
    const CartList = sequelize.define('CartList', {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
    });
  
    // Define the association between User and CartList
    CartList.belongsTo(sequelize.models.User, { onDelete: 'CASCADE' });
  
    return CartList;
  };
  