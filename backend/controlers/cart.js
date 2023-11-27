const { Cart } = require('../models');
const db = require('../models/index');

const cartController = {
  addToCart: async (req, res) => {
    try {
      const { name, price, quantity, imageUrl } = req.body;
      const newCartItem = await db.Cart.create({ name, price, quantity, imageUrl });
      res.json({ message: 'Added to cart', newCartItem });
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  getCartListData: async (req, res) => {
    try {
      const cartItems = await db.Cart.findAll();
      res.json(cartItems);
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

   deleteCartList: async (req, res) => {
    try {
      const { id } = req.params;
      const cartItem = await db.Cart.findByPk(id);

      if (!cartItem) {
        return res.status(404).send('Cart item not found');
      }

      await cartItem.destroy();

      res.json({ message: 'Cart item deleted successfully' });
    } catch (error) {
      res.status(500).send(error.message);
    }
  },


  deleteAllCartList: async (req, res) => {
    try {
      await db.Cart.destroy({ where: {} });

      res.json({ message: 'All cart items deleted successfully' });
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  updateCartItem: async (req, res) => {
    try {
      const { id } = req.params;
      const { name, price, quantity } = req.body;

      const cartItem = await db.Cart.findByPk(id);

      if (!cartItem) {
        return res.status(404).send('Cart item not found');
      }

      await cartItem.update({ name, price, quantity });

      res.json({ message: 'Cart item updated successfully' });
    } catch (error) {
      res.status(500).send(error.message);
    }
  },
};

module.exports = cartController;
