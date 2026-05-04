import mongoose from 'mongoose';


const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected');

    // ← Add this temporarily to drop the old index
    // await mongoose.connection.collection('users').dropIndex('name_1');
    // console.log('Old index dropped');

  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1);
  }
};

export default connectDB;