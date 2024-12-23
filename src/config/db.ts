import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI as string);
    console.log(`MongoDB successful connection`);
  } catch (err) {
    console.log(`MongoDB connection error`);
    console.log(err);
    process.exit(1);
  }
};

export default connectDB;
