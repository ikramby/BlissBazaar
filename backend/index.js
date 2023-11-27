const express = require("express");
const app = express();
const cors = require("cors");
require('dotenv').config();
const port = 7000;
const routeApp = require("./route/singin");
const productroute = require('./route/product');
const cartroute = require('./route/cart');
const db = require('./models'); // Import your Sequelize models

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// Sync the database (this will create tables if they don't exist)
db.sequelize.sync({ force: false }).then(() => {
  console.log('Database synchronized');
});

const cookieParser = require('cookie-parser');
app.use(cookieParser());
app.use('/cart', cartroute);
app.use('/products', productroute);
app.use("/tech", routeApp);

app.listen(port, () => {
  console.log(`Server is running on port:${port}`);
});
