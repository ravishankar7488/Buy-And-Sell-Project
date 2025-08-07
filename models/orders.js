const mongoose=require("mongoose");
const Schema=mongoose.Schema

const orderSchema=new Schema({
  customerId: {type: mongoose.Schema.Types.ObjectId, required: true},
  amount: {type: Number},
  orderbrand: {type: String},
  orderdiscountedprice: {type: Number},
  productId: {type: mongoose.Schema.Types.ObjectId, required: true},
  createdAt: {type: Date, default: Date.now},
  ordertitle: {type: String},
  orderimage: {type: String},
  status: {type: String, enum: ['Packed', 'Shipped', 'Confirmed', 'Delivered', 'Rejected', 'Order Placed', 'Canceled By Customer'], default: 'Order Placed'},
});
const Order=mongoose.model("Order", orderSchema);
module.exports=Order;