const mongoose = require("mongoose");

const emiSchema = mongoose.Schema({
  amount: Number,
  interest_rate: Number,
  months: Number,
  emi:Number
});
const EMIModel=mongoose.model("emi",emiSchema)

module.exports={
          EMIModel
}
