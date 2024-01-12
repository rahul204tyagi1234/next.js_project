import mongoose from "mongoose";

const userModel=new mongoose.Schema({
    firstname:String,
    lastname:String,
    email:String,
    password:Number,
    confirmPassword:Number,
    Gender:String,
    Address:String

})
export const User=mongoose.models.userDetails || mongoose.model("userDetails",userModel)