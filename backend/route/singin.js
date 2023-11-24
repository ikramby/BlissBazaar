const express=require("express");
const router=express.Router();
const {register,login, verifyToken}=require("../controlers/controlers")


router.post("/register",register);
router.post('/login',login);
router.get('/verifyToken' , verifyToken)



module.exports=router