const express=require("express");
const router=express.Router();
const {register,login, verifyToken, getMyInformation}=require("../controlers/controlers")


router.post("/register",register);
router.post('/login',login);
router.get('/verifyToken' , verifyToken)
router.get('/getMyInformation/:id', getMyInformation);



module.exports=router