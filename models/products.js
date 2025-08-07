const mongoose=require("mongoose");
const Schema=mongoose.Schema

const productSchema=new Schema({
  title: {type:String, required: true, minLength:2},
  brand: {type:String, required: true, minLength:2},
  description: {type: String, required: true, lowercase: true, trim: true },
  price: {type: Number, required:true, min: 1},
  priceafterdiscount: {type: Number,required:true, min: 0},
  stock: {type: Number, default: 1, min: 1},
  purchase: {type: Number, default: 0},
  imageurl: {type: String, default: "https://plus.unsplash.com/premium_photo-1664392147011-2a720f214e01?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D"},
  tags: [String],
  sellerId: {type: mongoose.Schema.Types.ObjectId,
    required: true},
  createdAt: {type: Date, default: Date.now}
});
const Product=mongoose.model("Product", productSchema);
module.exports=Product;