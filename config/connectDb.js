import mongoose from "mongoose"
import * as dotenv from "dotenv";
dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE_LOCAL;

const connectDb =async () => {
    try {
        const conn = await mongoose.connect(DB, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        })

        console.log(`MongoDB connected`)
    } catch (err) {
        console.log(`Error:${err.message}`)
        process.exit(1)
    }
}


export default connectDb