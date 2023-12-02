const express = require("express");
const router = express.Router();
//const { verifyToken } = require("../controlers/controlers");
const { getUserData, updateUserData } = require("../controlers/userController");

router.get("/edit-profile/:email", getUserData);
router.put("/edit-profile/:email", updateUserData);

module.exports = router;
