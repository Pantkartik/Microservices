const express=require("express");

const router=express.Router();

// need a controller for signup
const {handleSignup}=require("../controllers/auth_control")
router.post("/signup",handleSignup);


module.exports(
signup
)