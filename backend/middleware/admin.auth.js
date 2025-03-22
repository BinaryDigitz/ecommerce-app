import jwt from 'jsonwebtoken'
import asyncMiddleware from './asyncMiddleware.js'
import { JWT_SECRET, ADMIN_EMAIL, ADMIN_PASSWORD } from '../config/env.js'

const adminAuth = async ( req, res, next) =>{
    try{
    const admin_token = req.headers.token;
    if(!admin_token) return res.json({ success: false, message: 'Unauthorized', statusCode: 403})

   const decoded =  jwt.verify(admin_token, JWT_SECRET)
   if(!decoded) return res.json({ success:false, message: 'Forbidden', statusCode:401})
   if(decoded !== ADMIN_EMAIL + ADMIN_PASSWORD ) return res.json({ success:false, message: 'Forbidden', statusCode:401});
 
   next()
    }
   catch(ex){
    next(ex.message, ex)
   }

};


export default adminAuth;