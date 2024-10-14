import mongoose from 'mongoose';

const connectToMongoDb=async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_DB_URL);
        console.log('Connected to MongoDB successfully');
    } catch (error) {
        console.error('Failed to connect to MongoDB:', error);
    }
}

export default connectToMongoDb;