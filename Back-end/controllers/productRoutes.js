let express = require("express")
const ProductModel = require("../model/productModel");
const catchAsyncError = require("../middleware/catchAsyncError");
const Errorhandler=require("../utils/errorhadler")
const productRouter=express.Router()
const UserModel = require("../model/userModel")
const mongoose = require("mongoose");
const {productUpload}=require("../middleware/multer"),
const auth = require("../middleware/auth")

let path = require("path")


productRouter.post("/createProduct",productUpload.array("images",10), catchAsyncError(async(req, res, next)=>{
    const { email,name, description,category,tags,price,stock} = req.body;
    const images =req.files.map((file)=>file.path);
    console.log(email,name, description,category,tags,price,images);

    if (!email ||!name ||!description ||!category ||!tags ||!price ||!images ||!stock) {
        next(new Errorhadler("All fields are required",400))
    }
    let user=await UserModel.findOne({email})
    if(!user){
        next(new Errorhadler("user is not exist",404))
    }
    let product=new ProductModel({email,name, description,category,tags,price,images,stock})
  

    
    await product.save()
    res.status(201).json({message:"Product created successfully"})


}))

productRouter.get("/allproduct",catchAsyncError(async(req,res,next)=>{
    let allproduct=await ProductModel.find()

    if(allproduct && allproduct.length>0){
        allproduct=allproduct.map((product)=>{
        if(product.images && product.images.length>0){
            product.images=product.images.map((ele)=> path.basename(ele));
        }
          return product;
        })
        
    }

    res.status(200).json({status:true,message:allproduct})
    
}))


productRouter.post("/cart",auth,catchAsyncError(async(req,res,next)=>{
    
     let userId=req.user_Id
     const {prdodutId,quntity}=req.body
     if (!mongoose.Types.ObjectId.isValid(prdodutId)){
        return next(new Errorhandler("Invalid productiD",400))
     }

     if (!quntity || quntity<1){
        return next(new Errorhandler("quntity must be atleast 1",400))
     }
     if (!userId){
        return next(new Errorhandler("userID required",400))

     }
     const user = await UserModel.findById(userId);
     if (!user){
        return next(new Errorhandler("userID not found",400))

     }

     const product = await ProductModel.findById(prdodutId);
     if(!product){
        return next(new Errorhandler("product not found",400))
     }

     const cartIndex= user.cart.findIndex((item)=>{
        return item.prdodutId.toStrting()==prdodutId
     })

     if(cartIndex > -1){
        user.cart[cartIndex].quntity =+ quntity
     }else{
        user.cart.push({product,quntity});
     }

     await user.save();

     res.status(200).json({
        status:true,
        message:"Cart updated successfully",
        cart:user.cart,
     });


}));




module.exports =productRouter;