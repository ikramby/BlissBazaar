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
db.message = require('./Message')(sequelize, DataTypes);
db.products = require('./product')(sequelize, DataTypes);
db.cart = require('./cart')(sequelize, DataTypes);
db.users = require('./user')(sequelize, DataTypes);
db.orders = require('./orders')(sequelize, DataTypes);

db.cart.belongsTo(db.users, { foreignKey: 'iduser' });
db.Cart = db.cart; 

module.exports = db;
