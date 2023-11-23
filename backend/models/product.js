// models/product.js

module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
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
      allowNull: false,
    },
    
    status: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true,
      values: ['available', 'out of stock'],
    },
    color: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true,
      values: [
        'Beige',
        'White',
        'Blue',
        'Gold',
        'Gray',
        'Black',
        'Orange',
        'Pink',
        'Red',
        'Silver',
        'Green',
        'Purple',
      ],
    },
    manufacturer: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true,
      values: [
        'Apple',
        'benco',
        'Honor',
        'Huawei',
        'IKU',
        'Infinix',
        'IPLUS',
        'Itel mobile',
        'Lenovo',
        'LOGICOM',
        'Nokia',
        'Oppo',
        'Hp',
        'realme',
        'Samsung',
        'SCHNEIDER',
        'Toshiba',
        'Sagem',
      ],
    },
    onSale: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
    },
  });

  return Product;
};
