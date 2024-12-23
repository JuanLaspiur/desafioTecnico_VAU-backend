import User from '../models/User';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';


export const registerUser = async (userData: any) => {
    try {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(userData.password, salt);
      userData.password = hashedPassword;
  
      const user = new User(userData);
      await user.save();
      return user;
    } catch (err) {
      throw new Error('Error creating user: ' + err.message);
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
  
      const token = jwt.sign({ id: user._id }, 'your_jwt_secret', { expiresIn: '1h' });
  
      return { user, token };
    } catch (err) {
      throw new Error('Error logging in: ' + err.message);
    }
  };