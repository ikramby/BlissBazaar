const { Sequelize, DataTypes } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      password: {
        type: DataTypes.STRING,
        allowNull: true
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      purpose: {
        type: DataTypes.STRING,
        allowNull: true
      }
     
    });

  //User.hasMany(sequelize.models.Cart);

    
    return User;
  };
  