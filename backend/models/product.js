const { Sequelize, DataTypes } = require('sequelize');

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
      type: DataTypes.STRING,
      allowNull: true,
     type: DataTypes.ENUM(
      'computers',
        'phones',
        'electronics',
       'laptops',
        'tablets',
        'smartphones',
        'wearables',
        'accessories'  
        ),
    //  defaultValue: 'electronics',
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    
  //  status: {
    //  type: DataTypes.STRING,
      //allowNull: true,
     // values: ['available', 'out of stock'],
    //},
    color: {
      type: DataTypes.STRING,
      allowNull: true,
      type: DataTypes.ENUM(

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
      ),

    },
    manufacturer: {
      type: DataTypes.STRING,
      allowNull: true,
      type: DataTypes.ENUM(

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
  ),

    },
    
    onSale: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  });

  return Product;
};
