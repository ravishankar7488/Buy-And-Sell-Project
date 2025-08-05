const mongoose=require("mongoose");
const Schema=mongoose.Schema

const userSchema=new Schema({
  profileImage: {type: String, default: "https://example.com/default-profile.png"},
  name: {type:String, required: true, minLength:4},
  email: {type: String, required: true, unique: true, lowercase: true, trim: true },
  password: {type: String, required:true, minLength: 8},
  role: {type: String, enum: ['merchant', 'customer']},
  joinedAt: {type:Date, default: Date.now},
  isRead: {type:Boolean, default: false},
  contact: {
    pincode: {type:Number, required: true},
    phone: {type: Number, min: 6000000000, maxlength: 9999999999},
    address: {type: String, required: true},
    state: {type: String, required: true},
    city: {type: String, required: true}
  },
  gender: {type: String, required: true},
})
const User=mongoose.model("User", userSchema);
module.exports=User;0