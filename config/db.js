const mongoose =require("mongoose")
const Mongodb=require("mongodb").MongoClient

const connection = mongoose.connect(
  "mongodb+srv://anwarjitme:anwarjitme@cluster0.wdgpysq.mongodb.net/emiDB?retryWrites=true&w=majority"
,{
          useNewUrlParser:true,
          useUnifiedTopology:true
});

module.exports={
          connection
}