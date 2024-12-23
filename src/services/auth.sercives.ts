import User from '../models/User';
import jwt from 'jsonwebtoken';


export const registerUser = async (userData: any) => {
  try {
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
    const isMatch = await (user as any).comparePassword(password);
    if (!isMatch) {
      throw new Error('Invalid credentials');
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET as string, { expiresIn: '1h' });

    return { user, token };
  } catch (err) {
    throw new Error('Error logging in: ' + (err instanceof Error && err.message));
  }
};