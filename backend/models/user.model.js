import mongoose from "mongoose";

const UserSchema=new mongoose.Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true, minlength:6},
    fullName: {type: String, required: true},
    profilePic: {type: String, default: ""},
   gender:{type: String, required: true ,enum: ["male", "female"]}
})

const User=mongoose.model("User", UserSchema);

export default User;