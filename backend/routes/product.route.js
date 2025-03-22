import { Router } from 'express'
import adminAuth from '../middleware/admin.auth.js';
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

productRouter.post('/add', adminAuth, cpUpload, createProduct);

productRouter.get('/list', getProducts);

productRouter.post('/single', getProduct);

productRouter.delete('/remove', adminAuth, deleteProduct);

productRouter.put('/update',adminAuth, updateProduct);



export default productRouter;