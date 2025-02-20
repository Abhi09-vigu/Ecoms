const mongoose=require("mongoose")
require("dotenv").config()
 console.log(process.env.mongodb)

const connection=mongoose.connect(process.env.mongodb)
module.exports=connection