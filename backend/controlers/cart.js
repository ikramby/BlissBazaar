const { CartList, User } = require('../models');
const db = require('../models/index');

const cartController = {



  // Get all carts for a specific user
  getAllCartsForUser: async (req, res) => {
    try {
      const userId = req.params.userId;
      const user = await User.findByPk(userId, {
        include: [{ model: CartList }],
      });


      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }


      res.json(user.Carts);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },


  // Add a new item to the user's cart
  addToCartForUser: async (req, res) => {
    try {
      const userId = req.params.userId;
      const user = await User.findByPk(userId);


      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }


      const { name, price } = req.body;
      const newCartItem = await user.createCartList({
        name,
        price,
      });


      res.status(201).json(newCartItem);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },


  getCartListData: async (req, res) => {
    try {
      const cartListData = await CartList.findAll();
      res.status(200).json(cartListData);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },


  // Delete a specific cart item
  deleteCartList: async (req, res) => {
    try {
      const cartItemId = req.params.id;
      const deletedCartItem = await CartList.destroy({ where: { id: cartItemId } });


      if (!deletedCartItem) {
        return res.status(404).json({ error: 'Cart item not found' });
      }


      res.status(200).json({ success: true });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },


  // Delete all cart items
  deleteAllCartList: async (req, res) => {
    try {
      await CartList.destroy({ truncate: true });
      res.status(200).json({ success: true });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },


  // Update a specific cart item
  updateCartItem: async (req, res) => {
    try {
      const cartItemId = req.params.id;
      const updatedCartItem = await CartList.update(req.body, { where: { id: cartItemId } });


      if (!updatedCartItem[0]) {
        return res.status(404).json({ error: 'Cart item not found' });
      }


      res.status(200).json({ success: true });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },










};

module.exports = cartController;
