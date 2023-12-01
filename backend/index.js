const express = require("express");
const app = express();
const router = express.Router();
const cors = require("cors");
const cloudinary = require('cloudinary').v2;
const fileupload = require('express-fileupload');
require("dotenv").config();
cloudinary.config({ 
  cloud_name: process.env.CLOUD_Name, 
  api_key: process.env.CLOUD_API_KEY, 
  api_secret: process.env.CLOUD_API_SECRET
});
app.use(fileupload({ useTempFiles: true }));



require("dotenv").config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const port = 7000;
app.use(cors());
const routeApp = require("./route/singin");
const productroute = require("./route/product");
const messageroute = require("./route/Message");
const userRoutes = require("./route/user");
const cartroute = require("./route/cart");
const path = require('path'); 
const imageRoutes = require('./route/imageRoutes');

//app.use('/images', imageRoutes);
//app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const db = require("./models");

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

db.sequelize.sync({ force: false }).then(() => {
  console.log("Database synchronized");
});
const cookieParser = require("cookie-parser");
app.use(cookieParser());

app.use("/products", productroute);
app.use("/cart", cartroute);
app.use("/message", messageroute);

app.use("/tech", routeApp);
app.use("/", userRoutes);

//app.post('/upload', async (req, res) => {
//  try {
 //   if (!req.files || !req.files.image) {
 //     return res.status(400).json({ error: 'No image file provided' });
 //   }

   // const file = req.files.image;

//    const result = await cloudinary.uploader.upload(file.tempFilePath, {
  //    public_id: `${Date.now()}`,
  //    resource_type: 'auto'
  //  });

    //res.json({ message: 'Upload successful', imageUrl: result.secure_url });
  //} catch (error) {
  //  console.error('Error uploading to Cloudinary:', error);
  //  res.status(500).send('Error uploading image');
 // }
//});

app.listen(port, () => {
  console.log(`server is running on port:${port}`);
});
