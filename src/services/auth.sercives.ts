import User from '../models/User';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { redisClient } from '../config/redisConfig.ts';


export const registerUser = async (userData: any) => {
    try {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(userData.password, salt);
      userData.password = hashedPassword;
  
      const user = new User(userData);
      await user.save();
      return user;
    } catch (err) {
      throw new Error('Error creating user: ' + (err instanceof Error && err.message));
    }
  };
  
  export const loginUser = async (email: string, password: string) => {
    try {
      const user = await User.findOne({ email });
      if (!user) {
        throw new Error('User not found');
      }
  
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        throw new Error('Invalid credentials');
      }
  
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET as string, { expiresIn: '1h' });
  
      await redisClient.set(user._id.toString(), token, { EX: 3600 });
  
      return { user, token };
    } catch (err) {
      throw new Error('Error logging in: ' + (err instanceof Error && err.message));
    }
  };

  
  export const signOut = async (userId: string) => {
    try {
      await redisClient.del(userId);
      return { message: 'Successfully logged out' };
    } catch (err) {
      throw new Error('Error signing out: ' + (err instanceof Error && err.message));
    }
  };
  