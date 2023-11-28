const express=require("express");
const router=express.Router();
const {register,login, verifyToken, getMyInformation, updateUserInfo}=require("../controlers/controlers")


router.post("/register",register);
router.post('/login',login);
router.get('/verifyToken' , verifyToken)
router.get('/getMyInformation/:email', getMyInformation);
router.put('/updateUserInfo/:email', updateUserInfo);



module.exports=router