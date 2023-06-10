const express=require("express")
const mongoose = require("mongoose");
const {connection}=require("./config/db")
const { emiRouter}=require("./routes/emiRoutes")
const { userRoute}=require("./routes/userRoute")
const app=express()
// mongo.connect(
//   "mongodb+srv://anwarjitme:anwarjitme@cluster0.wdgpysq.mongodb.net/emiDB?retryWrites=true&w=majority",{
//  useNewUrlParser:true,
// useCreateIndex:true,
// useUnifiedTopology:true,
// useFindAndModify:false
//   }
// ).then(()=>{
//           console.log("dbis connected")
// }).catch((err)=>
//           console.log(err)
// )

app.use(express.json());
app.use("/user",userRoute)
app.use("/user",emiRouter)


app.listen(3000,async()=>{
   try{
await connection
console.log("connected to db")
    }catch(err){
console.log(err)
    }
    
}
)