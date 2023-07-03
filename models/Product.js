
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    product_name: {
        type:String,
        reqired:true,
    },
    price: {
        type:Number,
        reqired:true,
    },
    quantity: {
        type:Number,
        reqired:true,
    },
    stock: {
        type:Number,
        reqired:true,
    },

   

}, {
    timestamps:true,
   });


const Product = new mongoose.model('ProductQuest', productSchema );
module.exports = Product;