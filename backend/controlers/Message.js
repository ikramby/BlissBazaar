const { Message } = require('../models');
const db = require('../models/index'); 
const messageController = {
createMessage : async (req, res) => {
  const { fullName, subject } = req.body;

  try {
    const newMessage = await db.message.create({ fullName, subject });

    res.status(201).json({
      success: true,
      message: 'Message created successfully',
      data: newMessage,
    });
  } catch (error) {
    console.error('Error creating message:', error);
    res.status(500).json({ success: false, error: 'Message creation failed' });
  }
},
};


module.exports = messageController;
