import { config } from "dotenv";
config({ path:` .env.${process.env || 'development'}.local`})

export const {PORT, NODE_ENV, JWT_SECRET, MONGODB_URI } = process.env