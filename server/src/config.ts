import dotenv from "dotenv"
dotenv.config();



const ConfigKeys = {
    PORT: process.env.PORT,
    MONGODB_URL: process.env.MONGODB_URL as string,
    DB_NAME: process.env.DB_NAME,
    JWT_SECRET: process.env.JWT_SECRET as string
}



export default ConfigKeys;