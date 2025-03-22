import express from 'express'
import loadDatabase from './utils/loadDatabase.js'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import morgan from 'morgan'
import { JWT_SECRET } from './config/env.js'
import errorHandler from './middleware/errorHandler.js'
import connectCloudnary from './config/cloudinary.js'
import userRouter from './routes/user.route.js'
import productRouter from './routes/product.route.js'


export const app = express()
 if(!JWT_SECRET){
    console.log('FATAL ERROR: please provide jwt secret....');
    process.exit(1)
 }
 const corsOrigin ={
    origin: ['http://localhost:5174', 'http://localhost:5173'],
    optionSuccessStatus: 200
}

// Middleware
app.use(express.json())
app.use(morgan('tiny'))
app.use(cors(corsOrigin))
app.use(cookieParser())

// ...API endpoints
app.get('/', (req, res) =>{
    return res.json({ statusCode: 200, message: 'Hello world'})
});
app.use('/api/auth', userRouter);
app.use('/api/products', productRouter);

// ......Error handler
app.use(errorHandler)
loadDatabase()
connectCloudnary()