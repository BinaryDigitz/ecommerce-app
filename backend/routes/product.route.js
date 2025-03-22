import { Router } from 'express'
import { deleteProduct, getProduct, getProducts, createProduct, updateProduct } from '../controllers/product.controllers.js'
import multer from 'multer';

const upload = multer({ dest: 'uploads/'})
const productRouter = Router();

const cpUpload = upload.fields([
    { name: 'image1', maxCount: 1 },
    { name: 'image2', maxCount: 1 },
    { name: 'image3', maxCount: 1 },
    { name: 'image4', maxCount: 1 }
]);

productRouter.post('/add', cpUpload, createProduct);

productRouter.get('/list', getProducts);

productRouter.get('/single', getProduct);

productRouter.delete('/remove', deleteProduct);

productRouter.put('/update', updateProduct);



export default productRouter;