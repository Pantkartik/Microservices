// a validator or the controller for checking the login signup

// require the user from model db 

const user =require("../models/cred_db");

// async function non blocking code for signup 

async function handleSignup(req,res){
const {name,email,password}=req.body;
await user.create({
    name,
    email,
    password,
})
return res.redirect("/");
}

async function handleLogin(req,res){
const {email,password}=req.body;
const User=await user.findOne({email,password})
if(!user || !password){
    return res.render('login',{
        error:"Invalid username or password"
    });
}
 return res.redirect("/");

}

module.exports(
    handleSignup,handleLogin
)