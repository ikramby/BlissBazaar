const { Product } = require('../models/product');
const db = require('../models/index');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { Op } = require('sequelize');



const productController = {


  getAllProducts: async (req, res) => {
    try {
      const products = await  db.products.findAll();
      res.json(products);
    } catch (error) {
      res.status(500).send(error.message);
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

  createProduct: async (req, res) => {
    try {
      const {
        name,
        description,
        price,
        imageUrl,
        category,
        quantity,
        status,
        color,
        manufacturer,
        onSale,
      } = req.body;
console.log(req.body)

      const newProduct = await db.products.create({
        name,
        description,
        price,
        imageUrl,
        category,
        quantity,
        status,
        color,
        manufacturer,
        onSale,
      });
      res.json({ message: "created new product", newProduct });
      //res.json(newProduct);
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  updateProduct: async (req, res) => {
    try {
      const { id } = req.params;
      const product = await db.products.findByPk(id);
  
      if (!product) {
        return res.status(404).json({ error: 'Product not found' });
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
