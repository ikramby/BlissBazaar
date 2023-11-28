// userController.js
const db = require("../models/index");

exports.getUserData = async (req, res) => {
  try {
    console.log("req.params", req.params);

    const userId = req.params.userId; 
    console.log("hi", userId);

    const user = await db.users.findByPk(userId, {
      attributes: ["email", "firstName", "lastName", "purpose"],
    });
    console.log("user", user);
    if (user) {
      return res.json(user);
    } else {
      res.status(404).send("User not found");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};



exports.updateUserData = async (req, res) => {
  try {
    const userId = req.params.userId; 
    const updates = req.body; 

    
    const [updatedRows] = await db.users.update(updates, {
      where: { id: userId }
    });

    if (updatedRows > 0) {
      
      const updatedUser = await db.users.findByPk(userId, {
        attributes: ["id", "email", "firstName", "lastName", "purpose", "description", "avatar", "facebook", "twitter", "instagram", "linkedIn"],
      });
      res.json(updatedUser);
    } else {
      res.status(404).send("User not found or no changes made");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

