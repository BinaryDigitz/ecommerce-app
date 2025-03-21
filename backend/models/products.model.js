import mongoose from "mongoose";
import { JWT_SECRET } from "../config/env.js";
import jwt from 'jsonwebtoken'

const productSchema = new mongoose.Schema({
name:{
    type: String,
    required: true,
},
description:{
    type:String,
    required: true
},
price:{
    type:Number,
    requird: true
},
image:{
    type:Array,
    requird: true
},
category:{
    type: String,
    required: true
},
subCategory:{
    type: String,
    required: true
},
sizes:{
    type: Array,
    required: true
},
bestseller:{
    type:Boolean
},
date: { 
    type: Number,
    required: true}

});



productSchema.methods.generateToken = function(){
    return jwt.sign({ id: this._id }, JWT_SECRET)
};
 const ProductModel = mongoose.models.product || mongoose.model('product', productSchema);

 export default ProductModel