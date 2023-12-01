const express=require("express");
const router=express.Router();
const {register,login, verifyToken, getMyInformation, updateUserInfo, getAllUsers, deleteUser}=require("../controlers/controlers")


router.post("/register",register);
router.post('/login',login);
router.get('/verifyToken' , verifyToken)
router.get('/getMyInformation/:email', getMyInformation);
router.put('/updateUserInfo/:email', updateUserInfo);
router.get('/getAllUsers' , getAllUsers);
router.delete('/delete/:id', deleteUser);




module.exports=router