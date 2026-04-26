// here we add the user schema 

const mongoose=require("mongoose");
const { timeStamp } = require("node:console");

const cred_db=new mongoose.Schema({
    firstName:{
        type:String,
        required:true,

    },
    lastName:{
        type:String,
        required:false,

    },
    email:{
        type:String,
        required:true,
        minLength:8,
        maxLength:20,
        unique:true
    },
    password:{
        type:String,
        required:true,
        minLength:8,
        maxLength:20,
        unique:true
    }
},{timeStamp:true})

const user=mongoose.model('user',cred_db);

module.exports=user;