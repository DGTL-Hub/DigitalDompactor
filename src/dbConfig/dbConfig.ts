import mongoose from "mongoose";

export async function connect() {
    try {mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/nextjs', {}
} catch (error) {
    console.log('Error connecting to database')
    console.log(error)
    throw error
}