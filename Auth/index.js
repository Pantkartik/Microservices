// main execution file 
const express=require("express")
const path=require("path");
const {connectDb}=require('./connect');
const PORT=8000;
connectTodb=require("mogodb:/localhost:8001");

const app=express();


// routes
const login_route=require("./Router/login");
const signup_route=require("./Router/signup");
const static_route=require("./Router/static_route");


app.use("/login",login_route);
app.use("/signup",signup_route);
app.use("/",static_route);



// for views templates ssr ejs

app.set("view engine","ejs");
app.set("views",path.resolve("./views"));