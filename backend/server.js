import express from 'express'
import loadDatabase from './utils/loadDatabase.js'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import morgan from 'morgan'
import { JWT_SECRET } from './config/env.js'
import errorHandler from './middleware/errorHandler.js'


export const app = express()
 if(!JWT_SECRET){
    console.log('FATAL ERROR: please provide jwt secret....');
    process.exit(1)
 }

// Middleware
app.use(express.json())
app.use(morgan('tiny'))
app.use(cors())
app.use(cookieParser())

// ...API endpoints
app.get('/', (req, res) =>{
    return res.json({ statusCode: 200, message: 'Hello world'})
})

// ......Error handler
app.use(errorHandler())
loadDatabase()