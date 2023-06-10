const express=require("express")
const {EMIModel}=require("../model/emiModel")
const emiRouter=express.Router()

emiRouter.post("/emi", async(req,res)=>{
  const {amount,interest_rate,months}=req.body
  
  //  EMI:E = P x r x ( 1 + r )n / ( ( 1 + r )n - 1 )  // formula
  let r=interest_rate/12/100
  let emi=amount * r* (1 + r)*months / ((1 + r)*months - 1)
   let  emi_data = new EMIModel({ amount,interest_rate, months, emi});
   await emi_data.save();
   res.send("EMi Calculated and added  in  db")
})

emiRouter.get("/emi", async (req, res) => {

  let emi_data = await EMIModel.find();

  res.send(emi_data);
});







module.exports={
          emiRouter
}
