const mongoose=require("mongoose")
require("dotenv").config()
 console.log(process.env.mongodb)

const connection=async()=>{
    try{ await mongoose.connect(process.env.mongodb)
    console.log("connected to mongodb")}
    catch(e){console.log(e)}
    }

module.exports=connection 