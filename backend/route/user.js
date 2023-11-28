const express = require("express");
const router = express.Router();
const { verifyToken } = require("../controlers/controlers");
const { getUserData, updateUserData } = require("../controlers/userController");

router.get("/edit-profile/:userId", verifyToken, getUserData);
router.put("/edit-profile/:userId", verifyToken, updateUserData);

module.exports = router;
