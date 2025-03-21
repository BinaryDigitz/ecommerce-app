import mongoose from "mongoose";
import { JWT_SECRET } from "../config/env.js";
import jwt from 'jsonwebtoken'

export const userSchema = mongoose.Schema({
    name:{ 
        type:String,
        required:[true, 'Name is required!'],
        minLength:5,
        maxLength:50
    },
    email:{
        type:String,
        required:[true, 'Email is required!'],
        unique:[true, 'Email already exist!'],
        minLength:5,
        maxLength:255,
        match:[/\S+@\S+\.\S+/, 'Please fill a valid email address']
    },
    password:{
        type:String,
        required:[true, 'Password is required!'],
        minLength:8,
        maxLength:1024
    },
    cartData:{
        type: Object,
        default: {}
    }
},{
    minimize: false
}
);

 userSchema.methods.generateToken = function(){
return  jwt.sign({id: this._id }, JWT_SECRET)

};

 const UserModel = mongoose.models.user || mongoose.model('user', userSchema)

 export default UserModel