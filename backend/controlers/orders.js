const { Order } = require('../models');
const db = require('../models/index');

const orderController = {
  getAllOrders: async (req, res) => {
    try {
      const orders = await db.orders.findAll();
      res.json(orders);
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  getOrderById: async (req, res) => {
    try {
      const { id } = req.params;
      const order = await db.orders.findByPk(id);

      if (!order) {
        return res.status(404).send('Order not found');
      }

      res.json(order);
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  
  createOrder: async (req, res) => {
    try {
      // Extract required data from the request body
      const { totalPrice, fullName, phoneNumber, address, cartData } = req.body;

      // Create a new order with user information
      const newOrder = await db.orders.create({
        totalPrice,
        fullName,
        phoneNumber,
        address,
      });

    //   // Add associated products to the order
    //   await Promise.all(
    //     cartData.map(async (product) => {
    //       const newProduct = await db.products.create({
    //         name: product.name,
    //         price: product.price,
    //         quantity: product.quantity,
    //       });
    //       // Associate the product with the order
    //       await newOrder.addProduct(newProduct);
    //     })
    //   );

      res.json({ message: 'Created new order', newOrder });
    } catch (error) {
      console.error('Error creating order', error);
      res.status(500).send(error.message);
    }
  },
 
};

module.exports = orderController;
