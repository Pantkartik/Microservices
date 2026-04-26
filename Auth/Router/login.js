const express=require("express");

const router=express.Router();
// need a controller for login 
const {handleLogin}=require("../controllers/auth_control")
router.post("/login",handleLogin);


module.exports(
login
)