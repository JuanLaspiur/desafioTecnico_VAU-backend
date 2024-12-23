import mongoose from 'mongoose';
import chalk from 'chalk';

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI as string);
    console.log(chalk.green('MongoDB successful connection'));
  } catch (err) {
    console.log(chalk.green('MongoDB connection error'));
    console.log(err);
    process.exit(1);
  }
};

export default connectDB;
