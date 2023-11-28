const { Sequelize, DataTypes } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    purpose: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    avatar: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    facebook: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    twitter: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    instagram: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    linkedIn: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    manufacturer: {
      type: DataTypes.STRING,
      allowNull: true,
      type: DataTypes.ENUM(
        "Apple",
        "benco",
        "Honor",
        "Huawei",
        "IKU",
        "Infinix",
        "IPLUS",
        "Itel mobile",
        "Lenovo",
        "LOGICOM",
        "Nokia",
        "Oppo",
        "Hp",
        "realme",
        "Samsung",
        "SCHNEIDER",
        "Toshiba",
        "Sagem"
      ),
    },
  });

  return User;
};
