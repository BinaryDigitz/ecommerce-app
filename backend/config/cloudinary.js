import { v2 as cloudinary } from 'cloudinary'
import { CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET_KEY, CLOUDINARY_NAME } from './env.js'

 async function connectCloudnary (){
    cloudinary.config({
        cloud_name: CLOUDINARY_NAME,
        api_key: CLOUDINARY_API_KEY,
        api_secret: CLOUDINARY_API_SECRET_KEY
    });
}

export default connectCloudnary