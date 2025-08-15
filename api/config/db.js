import mongoose from "mongoose";

export const connectDB = async() =>{
try {
    const connect = await mongoose.connect(process.env.MONGODB_URI)
    console.log(`Mongodb Connected Sucessfully:✅ ${connect.connection.host}`);
} catch (error) {
    console.log('Error connection to MongoDB:', error);
    process.exit(1)
}
} 