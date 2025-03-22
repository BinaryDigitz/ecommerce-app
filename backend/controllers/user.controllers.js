import UserModel from '../models/user.model.js'
import Joi from 'joi';
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import asyncMiddleware from '../middleware/asyncMiddleware.js';
import { ADMIN_EMAIL, ADMIN_PASSWORD, JWT_SECRET } from '../config/env.js';




// LOGIN USER
export const login = asyncMiddleware( async ( req, res) => {
    const { error } = validateLogin(req.body);
    //  if(error) return res.json({ success: false, message: error.details[0].message});

    const { email, password} = req.body;
    let user = await UserModel.findOne({email});
    if(!user) return res.json({ succes: false, message: 'User not found.', statusCode: 404});

    const hashedPassword = await bcrypt.compare( password, user.password );
    if(!hashedPassword) return res.json({ success: false, message: 'Incorrect password', statusCode: 400});

    const token = user.generateToken()
    const { password: pass, ...rest } = user._doc;
    res.cookie('token', token, { expiresIn: '3d'})
    .json({ success: true, message: 'User logged in successfully.', user: rest});
});

// REGISTER USER
export const register = asyncMiddleware( async ( req, res) => {
    // return res.json({ success: true, message: 'REGISTER'});

 const { error } = validateRegister( req.body)
//  if(error) return res.json({ success: false, message: error.details[0].message});

 const { name, email, password } = req.body;
 const existUser = await UserModel.findOne({ email});
 if(existUser) return res.json({ success: false, message: 'Email already exist', statusCode: 400});

 const hashPassword = await bcrypt.hash( password, 10);
 let user = new UserModel({ name, email, password: hashPassword});
  user = await user.save();

 const token = user.generateToken()
 const { password: pass, ...rest } = user._doc
 res.cookie('token', token, { expiresIn: '3d'})
 .json({ success: true, statusCode: 201, message: 'User registered successfully', user: rest})
});

// ADMIN LOGIN
export const adminLogin = asyncMiddleware( async ( req, res) =>{
    // const { error } = validateLogin(req.body)
    // if(error) return res.json({ success: false, msessage: error.details[0].message, statusCode: 400});

    const { email, password } = req.body
    if( email !== ADMIN_EMAIL || password !== ADMIN_PASSWORD ){
        return res.json({ success:false, statusCode: 400, message: 'Invalid Email or Password.'})
    };
    const token = jwt.sign( email + password , JWT_SECRET)

    res.cookie('admin-token', token, { expiresIn: '1d'})
    .json({ success: true, statusCode: 200, message: 'Welcome admin', admin_token: token})

});

function validateRegister(user){
    const schema = Joi.object({
        name: Joi.string().min(5).max(50),
        email: Joi.string().min(5).max(50),
        password: Joi.string().min(5).max(250),
    });
    return schema.validate(user)
};

function validateLogin(user){
    const schema = Joi.object({
        email: Joi.string().min(5).max(50),
        password: Joi.string().min(5).max(250),
    });
    return schema.validate(user)
};