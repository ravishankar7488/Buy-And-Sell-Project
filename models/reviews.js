const mongoose=require("mongoose");
const Schema=mongoose.Schema

const reviewSchema=new Schema({
  productId: {type: mongoose.Schema.Types.ObjectId, required: true},
  reviewerId: {type: mongoose.Schema.Types.ObjectId, required: true},
  reviewerName: {type: String, required: true},
  comment: {type: String, minLength: 1},
  createdAt: {type: Date, default: Date.now},
});
const Review=mongoose.model("Review", reviewSchema);
module.exports=Review;