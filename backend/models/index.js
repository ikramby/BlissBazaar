// models/index.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.products = require('./product')(sequelize, DataTypes);
db.cart = require('./cart')(sequelize, DataTypes);
db.users = require('./user')(sequelize, DataTypes);

db.cart.belongsTo(db.users, { foreignKey: 'iduser' });

module.exports = db;
