const express = require("express");
const app = express();
const router = express.Router();
const cors = require("cors");
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary'); 

cloudinary.config({ 
  cloud_name: process.env.CLOUD_Name, 
  api_key: process.env.CLOUD_API_KEY, 
  api_secret: process.env.CLOUD_API_SECRET
});

const storage = new CloudinaryStorage({ // Use CloudinaryStorage
  cloudinary: cloudinary,
  params: {
    folder: 'uploads',
    allowedFormats: ['jpeg', 'png', 'jpg']
  }
});


require("dotenv").config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const port = 7000;
app.use(cors());
const routeApp = require("./route/singin");
const productroute = require("./route/product");
const userRoutes = require("./route/user");
const cartroute = require("./route/cart");

const db = require("./models");

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

// Sync the database (this will create tables if they don't exist)
db.sequelize.sync({ force: false }).then(() => {
  console.log("Database synchronized");
});
const cookieParser = require("cookie-parser");
app.use(cookieParser());

app.use("/products", productroute);
app.use("/cart", cartroute);

app.use("/tech", routeApp);
app.use("/", userRoutes);

app.listen(port, () => {
  console.log(`server is running on port:${port}`);
});
