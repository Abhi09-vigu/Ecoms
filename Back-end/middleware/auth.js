
const jwt = require("jsonwebtoken")
const auth= (req,res,next)=>{

    let token = req.cookies.accesstoken
    if (!token){
        return res.status(400).json("token not found")
    }
    jwt.verify(token,(error,decoded)=>{
        if(error){
           return res.status(400).json("invalid token")
        }
        let userId=decoded.id 
        req.user_Id=userId
        next()
    })

}

module.exports=auth