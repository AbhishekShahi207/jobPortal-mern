import mongoose, { mongo } from "mongoose";

const connectDb = async ()=>{
    try {
        const conn= await mongoose.connect(process.env.MONGO_URI)
        console.log("✅ Connected to database successfully")
    } catch (error) {
        console.log("❌ Failed to connect to Database")
    }
}

export default connectDb;