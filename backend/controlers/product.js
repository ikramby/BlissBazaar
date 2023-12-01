const { Product } = require('../models/product');
const db = require('../models/index');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { Op } = require('sequelize');
const cloudinary = require('cloudinary').v2;

cloudinary.config({ 
  cloud_name: process.env.CLOUD_Name, 
  api_key: process.env.CLOUD_API_KEY, 
  api_secret: process.env.CLOUD_API_SECRET
});


const productController = {


  getAllProducts: async (req, res) => {
    try {
      const products = await  db.products.findAll();
      res.json(products);
    } catch (error) {
      res.status(500).send(error.message);
    }
  },
  searchProducts: async (req, res) => {
    try {
      const { input } = req.query;
console.log(input)
      const products = await Product.findAll({
        where: {
          [Op.or]: [
            { name: { [Op.iLike]: `%${input}%` } }, // Case-insensitive search by name
            { description: { [Op.iLike]: `%${input}%` } }, // Case-insensitive search by description
            { manufacturer: { [Op.iLike]: `%${input}%` } }, // Case-insensitive search by manufacturer
            { color: { [Op.iLike]: `%${input}%` } }, // Case-insensitive search by color
            { category: { [Op.iLike]: `%${input}%` } }, // Case-insensitive search by category

            
          ],
        },
      });

      res.json(products);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
  getProductById: async (req, res) => {
    try {
      const { id } = req.params;
      const product = await db.products.findByPk(id);

      if (!product) {
        return res.status(404).send('Product not found');
      }

      res.json(product);
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

 // controllers/productController.js
 createProduct: async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      category,
      quantity,
      status,
      color,
      manufacturer,
    } = req.body;

    const imageUrl = req.body.image; // Assuming the image URL is sent in the request body

    const newProduct = await db.products.create({
      name,
      description,
      price,
      imageUrl, // Use the provided image URL
      category,
      quantity,
      status,
      color,
      manufacturer,
    });

    res.json({ message: 'created new product', newProduct });
  } catch (error) {
    console.error('Error creating product:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
},

updateProduct: async (req, res) => {
  try {
    const { id } = req.params;
    const product = await db.products.findByPk(id);

    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    let newImageUrl;

    if (req.body.image) {
      // Assuming the image URL is sent in the request body
      newImageUrl = req.body.image;
      product.imageUrl = newImageUrl;
      await product.update({ imageUrl: newImageUrl });
    }

    await product.update(req.body);

    res.json({ message: 'Product updated successfully' });
  } catch (error) {
    console.error('Error updating product:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
},


  deleteProduct: async (req, res) => {
    try {
      const { id } = req.params;

      const product = await  db.products.findByPk(id);

      if (!product) {
        return res.status(404).send('Product not found');
      }

      await product.destroy();

      res.json({ message: 'Product deleted successfully' });
    } catch (error) {
      res.status(500).send(error.message);
    }
  },
  getProductsByCategory: async (req, res) => {
    try {
      const { category } = req.params;

      const products = await db.products.findAll({
        where: { category },
      });

      res.json(products);
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  getProductsByColor: async (req, res) => {
    try {
      const { color } = req.params;
      const products = await db.products.findAll({
        where: {
          color: color,
        },
      });

      res.json(products);
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  getProductsByManufacturer: async (req, res) => {
    try {
      const { manufacturer } = req.params;
      const products = await db.products.findAll({
        where: {
          manufacturer: manufacturer,
        },
      });

      res.json(products);
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  getProductsByPrice: async (req, res) => {
    try {
      const { price } = req.params;
      const [minPrice, maxPrice] = price.split('-');
  
      const products = await db.products.findAll({
        where: {
          price: {
            [Op.gte]: Number(minPrice),
            [Op.lte]: Number(maxPrice),
          },
        },
      });
  
      res.json(products);
    } catch (error) {
      console.error('Error fetching products by price', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  
};


module.exports = productController;
