
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    category: {
      type: DataTypes.ENUM(
        'computers',
        'phones',
        'electronics',
        'laptops',
        'tablets',
        'smartphones',
        'wearables',
        // Add more device categories as needed
      ),
      defaultValue: 'electronics',
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    
    status: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true,
      values: ['available', 'out of stock'],
    },
    color: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    manufacturer: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    
    onSale: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
    },
  });

  return Product;
};