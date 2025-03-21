import { Router } from 'express'
import { deleteProduct, getProduct, getProducts, createProduct, updateProduct } from '../controllers/product.controllers.js'

const productRouter = Router();

productRouter.post('/add', createProduct);

productRouter.get('/list', getProducts);

productRouter.get('/single/:id', getProduct);

productRouter.delete('/remove/:id', deleteProduct);

productRouter.update('/update', updateProduct);



export default productRouter;