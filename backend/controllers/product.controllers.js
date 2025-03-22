import asyncMiddleware from '../middleware/asyncMiddleware.js'
import { v2 as cloudinary} from 'cloudinary'
import ProductModel from '../models/products.model.js';
import Joi from 'joi';


// add product
export const createProduct = asyncMiddleware( async ( req, res ) =>{
    const { error} = validateProduct(req.body)
    if(error ) return res.json({ success: false, statusCode: 400, message: error.details[0].message})
    // destructure the form data
 const { name, description, price, category, subCategory, sizes, bestseller } = req.body;
 const existProduct = await ProductModel.findOne({name})
 if(existProduct) return res.json({ success: false, statusCode: 400, message: 'Product name alredy exist.'})

//  create name for 4 image items,
// first check if all images are not undefined before initialising
 const image1 = req.files.image1 && req.files.image1[0]
 const image2 = req.files.image2 && req.files.image2[0]
 const image3 = req.files.image3 && req.files.image3[0]
 const image4 = req.files.image4 && req.files.image4[0]

//  create an array of images and filter the undefined images
 const images = [ image1, image2, image3, image4 ].filter(image => image !== undefined )

//  map through all images and create a url with cloudinary
// return the url of the images
 let imagesUrl = await Promise.all(
    images.map( async (item) =>{
        let result = await cloudinary.uploader.upload(item.path, { resource_type: 'image'})
        return result.secure_url
    })
 );
//  save to data base
const productData = {
    name,
     description,
     price: Number(price),
     category, subCategory,
    //  sizes:JSON.parse(sizes),
     bestseller: bestseller === 'true' ? true: false,
     images: imagesUrl,
     date: Date.now()
}
console.log(productData);

let product = new ProductModel(productData);
await product.save()

 res.json({ success: true, statusCode: 201, message: 'product successfully uploaded'})
 
});

// get all products
export const getProducts = asyncMiddleware( async ( req, res ) =>{
 const products = await ProductModel.find({});
 res.json({ success: true, products })

});

// remove product
export const deleteProduct = asyncMiddleware( async ( req, res ) =>{
    const { id } = req.body
    const product = await ProductModel.findOne({id})
    if(!product) return res.json({ success: false, messge: 'Product not found', statusCode: 404})
    await ProductModel.findByIdAndDelete( id );
    res.json({
        success: true,
        statusCode:202,
        message:'Product deleted successfully.'
    })

});

// get Product
export const getProduct = asyncMiddleware( async ( req, res ) =>{

});

// update Product
export const updateProduct = asyncMiddleware( async ( req, res ) =>{

});


function validateProduct(product){
    const schema = Joi.object({
        name: Joi.string().min(3).max(50),
        description: Joi.string().min(3).max(250),
        price: Joi.string().min(1).max(6),
        category: Joi.string().min(3).max(50),
        subCategory: Joi.string().min(3).max(50),
        sizes: Joi.array().items(Joi.string()),
        bestseller: Joi.boolean()
    })
    return schema.validate(product)
};