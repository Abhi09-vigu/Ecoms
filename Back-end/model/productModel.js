const mongoose = require('mongoose');

const productSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        category: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        quantity: {
            type: Number,
            required: true
        },
        email:{
            type: String,
            required: true
            
        }
    },

{
    timestamps: true
}
);


ProductModel= mongoose.model("Product", productSchema)
module.exports= ProductModel