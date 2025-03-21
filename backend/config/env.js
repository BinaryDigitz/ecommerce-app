import { config } from "dotenv";

config({ path: `.env.${process.NODE_ENV || 'development'}.local`})

export const { PORT, NODE_ENV, JWT_SECRET, MONGODB_URI, CLOUDINARY_NAME, CLOUDINARY_API_SECRET_KEY, CLOUDINARY_API_KEY  } = process.env

