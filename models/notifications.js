const mongoose=require("mongoose");
const Schema=mongoose.Schema

const notificationSchema=new Schema({
  senderId: {type: mongoose.Schema.Types.ObjectId, required: true},
  receiverId: {type: mongoose.Schema.Types.ObjectId, required: true},
  message: {type: String},
  createdAt: {type: Date, default: Date.now}
});
const Notification=mongoose.model("Notification", notificationSchema);
module.exports=Notification;