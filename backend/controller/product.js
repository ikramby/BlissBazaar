const { Product } = require('../models/product');

const productController = {
  getAllProducts: async (req, res) => {
    try {
      const products = await Product.findAll();
      res.json(products);
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  getProductById: async (req, res) => {
    try {
      const { id } = req.params;
      const product = await Product.findByPk(id);
      
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
      const { name, description, price, imageUrl, /* other attributes */ } = req.body;
      const newProduct = await Product.create({
        name,
        description,
        price,
        imageUrl,
        // ... other attributes
      });

      res.json(newProduct);
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  updateProduct: async (req, res) => {
    try {
      const { id } = req.params;
      const { name, description, price, imageUrl, /* other attributes */ } = req.body;

      const product = await Product.findByPk(id);

      if (!product) {
        return res.status(404).send('Product not found');
      }

      await product.update({
        name,
        description,
        price,
        imageUrl,
        // ... other attributes
      });

      res.json({ message: 'Product updated successfully' });
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  deleteProduct: async (req, res) => {
    try {
      const { id } = req.params;

      const product = await Product.findByPk(id);

      if (!product) {
        return res.status(404).send('Product not found');
      }

      await product.destroy();

      res.json({ message: 'Product deleted successfully' });
    } catch (error) {
      res.status(500).send(error.message);
    }
  },
};

module.exports = productController;
