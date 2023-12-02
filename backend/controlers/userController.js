const db = require("../models/index");

exports.getUserData = async (req, res) => {
  try {
    console.log("req.params", req.params);

    const userId = req.params.userId;
    console.log("hi", userId);

    const user = await db.users.findByPk(userId, {
      attributes: ["email", "firstName", "lastName", "purpose", "description"],
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
    const userEmail = req.params.email;
    const updates = req.body;

    const user = await db.users.findOne({ where: { email: userEmail } });
    if (!user) {
      return res.status(404).send("User not found");
    }

    await user.update(updates);

    const updatedUser = await db.users.findByPk(user.id, {
      attributes: [
        "id",
        "email",
        "firstName",
        "lastName",
        "purpose",
        "description",
      ],
    });
    res.json(updatedUser);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
