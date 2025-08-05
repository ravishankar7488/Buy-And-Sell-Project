const mongoose=require("mongoose");
const Schema=mongoose.Schema

const cartSchema=new Schema({
  customerId : {type: mongoose.Schema.Types.ObjectId, required: true},
  productId : {type: mongoose.Schema.Types.ObjectId, required: true},
  productName : {type: String},
  productPrice : {type: Number},
  addedToCartAt : {type : Date, default: Date.now},
  productImage : {type: String}
});
const Cart=mongoose.model("Cart", cartSchema);
module.exports=Cart;