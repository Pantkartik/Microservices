// server side rendering handle krega 

const express=require("express");

const router=express.Router();

// router for signup 

router.get("/signup",(req,res)=>{
return res.render("signup")
})

router.get("/login",(req,res)=>{
return res.render("login")
})



module.exports=router;