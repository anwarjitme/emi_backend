const express = require("express");
const { UserModel } = require("../model/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userRoute = express.Router();

userRoute.post("/register", async (req, res) => {
  const { name, email, password} = req.body;
  try {
  let hashed_password= await bcrypt.hash(password,3)
  let user_data= new UserModel({email,password:hashed_password})
  await user_data.save()
  res.send("Registration successful")
  } catch (err) {
   res.status(500)
  }
});
userRoute.post("/login", async (req, res) => {
  const { email,password } = req.body;

  try {
  const user= await UserModel.findOne({email})
 if(!user){
 return  res.status(401)
 }

  const valid_password= await bcrypt.compare(password,user.password) 
  if (!valid_password) {
    return res.status(401);
  } 
   const token = jwt.sign({userId:user._id},"masai")
   res.send({ msg: `login succesfull,token is:${token}` });  
  } catch (err) {
    console.log({ err: "Login failed" });
  }
});



module.exports={
          userRoute
}